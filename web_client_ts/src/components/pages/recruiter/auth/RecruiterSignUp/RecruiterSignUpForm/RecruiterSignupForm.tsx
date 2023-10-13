import { useCallback, useContext, useEffect, useState } from 'react';
import { CompanyList } from '../../../../../../@types/CompanyList';
import { getCompanyList } from '../../../../../../utils/apis/company/company';
import { RecruiterDetails } from '../../../../../../@types/RecruiterDetails';
import { registerRecruiter } from '../../../../../../utils/apis/recruiter/recruiter';
import { useNavigate } from 'react-router-dom';
import { recruiterContext } from '../../../../../../context/recruiterDetails/RecruiterContext';
import { globalContext } from '../../../../../../context/GlobalDetails/GlobalContext';
import { logo } from '../../../../../../assets/images';
import RecruiterSignUpPage1 from '../RecruiterSignUpPage1/RecruiterSignUpPage1';
import RecruiterSignUpPage2 from '../RecruiterSignUpPage2/RecruiterSignUpPage2';
import RecruiterSignUpPage3 from '../RecruiterSignUpPage3/RecruiterSignUpPage3';
import OtpVerification from '../OtpVerificationPage/OtpVerification';
import { confirmationResult, sendOtp } from '../../../../../../utils/service/firebase.service';
import Spinner from '../../../../../shared/spinner/Spinner';

const RecruiterSignupForm = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(recruiterContext);
  const { loggedIn } = useContext(globalContext);
  const [otp, setOtp] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [companyList, setCompanyList] = useState<CompanyList[]>([]);
  const [page, setPage] = useState<number>(0);
  const [buttonText, setButtonText] = useState<string>('Next');
  const [recruiterSignUpDetail, setRecruiterSignUpDetail] = useState<RecruiterDetails>({
    first_name: "",
    middle_name: "",
    last_name: "",
    email: "",
    country_code: "+91",
    phone: 0,
    password: "",
    address: "",
    state: "",
    country: "india",
    pin: 0,
    age: 0,
    dob: new Date(),
    company_id: ""
  } as RecruiterDetails);

  const signUpRecruiter = async () => {
    setLoading(true);
    const response = await registerRecruiter(recruiterSignUpDetail);
    setLoading(false);
    if (response?.status === 200) {
      const recruiterDetails = response.data.recruiter as RecruiterDetails;
      dispatch({ type: "login", payload: recruiterDetails })
      loggedIn({ type: "login", userType: "recruiter" });
      navigate('/recruiter/jobs');
    }
  }

  const handleChnageRecruiterDetails = useCallback((event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    if (name === "cnf_password") {
      (recruiterSignUpDetail.password !== value) ? setPasswordError(true) : setPasswordError(false);
    }
    setRecruiterSignUpDetail(Object.assign({}, recruiterSignUpDetail, { [name]: value }))
  }, [recruiterSignUpDetail])

  const handleChangeOtp = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setOtp(value);
  }

  const senOtpToPhone = () => {
    const phone = "+91" + recruiterSignUpDetail.phone.toString();
    console.log(phone);
    sendOtp(phone);
  }

  const validateOtp = async () => {
    confirmationResult.confirm(otp).then(async () => {
      await signUpRecruiter();
    }).catch((error) => {
      // setInvalidOtp(true);
      console.log(error);
    });
  }


  const handlePageIncrement = async () => {
    console.log(page);
    if (page < 4) {
      setPage(prev => prev + 1);
    }
    if (page === 1) {
      console.log("otp");
      senOtpToPhone();
    }
    else if (page === 3) {
      console.log("page 4");
      await validateOtp();
    }
  }
  // const handlePageDecrease = async () => {
  //   if (page > 0) {
  //     setPage(prev => prev - 1);
  //   }
  // }

  useEffect(() => {
    getCompanyList().then((response) => {
      const companyList = response!.data.company;
      setCompanyList(companyList)
    });
  }, []);

  useEffect(() => {
    if (page === 4) {
      setButtonText("")
    }
    else {
      setButtonText("Continue");
    }
  }, [page]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src={logo} className='mb-2' />
      <div className=" p-8 w-full max-w-sm">
        {
          (loading) ? <Spinner /> :
            <div>
              <h1 className="text-2xl font-semibold mb-6">Sign Up</h1>
              {
                (page === 0) ?
                  <RecruiterSignUpPage1 companyList={companyList} handleChnageRecruiterDetails={handleChnageRecruiterDetails} />
                  :
                  (page === 1) ?
                    <RecruiterSignUpPage2 handleChnageRecruiterDetails={handleChnageRecruiterDetails} />
                    :
                    (page === 2) ?
                      <RecruiterSignUpPage3 handleChnageRecruiterDetails={handleChnageRecruiterDetails} passwordError={passwordError} />
                      :
                      (page === 3) ?
                        <OtpVerification handleChangeOtp={handleChangeOtp} />
                        : null
              }
            </div>
        }


        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300" id="sign-in-button" onClick={handlePageIncrement}>{buttonText}</button>
        <p className="text-sm text-gray-600 mt-3">Already have an account? <a href="#" className="text-blue-500 hover:underline">Log in</a></p>
      </div>

    </div>
  )
}

export default RecruiterSignupForm
