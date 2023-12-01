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
import {Alert} from '../../../../../shared/alert/Alert';
import { validateName } from '../../../../../../utils/commonFunctions/validateName';
import { validatePhone } from '../../../../../../utils/commonFunctions/validatePhone';
import { validatePassword } from '../../../../../../utils/commonFunctions/validatePassword';

const RecruiterSignupForm = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(recruiterContext);
  const { loggedIn } = useContext(globalContext);
  const [otp, setOtp] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [companyList, setCompanyList] = useState<CompanyList[]>([]);
  const [page, setPage] = useState<number>(0);
  const [pageOnerrors, setPageOnerrors] = useState<{ first_name?: string; last_name?: string }>({});
  const [pageTworrors, setPageTwoErrors] = useState<{ phone?: string }>({});
  const [pageThreeerrors, setPageThreeErrors] = useState<{ email?: string; password?: string }>({});
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
      const recruiterDetails = response.data.data as RecruiterDetails;
      dispatch({ type: "login", payload: recruiterDetails })
      loggedIn({ type: "login", userType: "recruiter" });
      navigate('/employer/pricing');
    }else{
      alert("error")
    }
  }
  const [disable, setDisable] = useState<boolean>(false);
 

  const handlePageIncrement = async () => {
    if (page === 1) {
      console.log("Checking pageOnerrors:", pageOnerrors);
      if (pageOnerrors.first_name || pageOnerrors.last_name || recruiterSignUpDetail.first_name === undefined || recruiterSignUpDetail.last_name === undefined) {
        console.log("Invalid first_name or last_name");
        alert("First Name or Last Name may be invalid");
        return;
      }
    }
    if (page === 2) {
      if (pageTworrors.phone || recruiterSignUpDetail.phone ===undefined) {
        alert("Phone Number be invalid")
        return;
      }
    }
    else if (page === 3) {
      console.log("page 4");
      await validateOtp();
      return;
    }
    setPage(prev => prev + 1);
  }


  const handleChnageRecruiterDetails = useCallback((event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    if(name==="first_name" || name==="last_name"){
      const nameError=validateName(value,name);
      setPageOnerrors(Object.assign({}, pageOnerrors, { [name]: nameError }))
      setRecruiterSignUpDetail(Object.assign({},  recruiterSignUpDetail, { [name]: Number(value) }));
    }
    if(name==="phone"){
      const phoneError=validatePhone(value);
      setPageTwoErrors(Object.assign({}, pageTworrors, { "phone": phoneError }))
      setRecruiterSignUpDetail(Object.assign({}, recruiterSignUpDetail, { [name]: Number(value) }));
    }
    if(name==="password"){
      const passwordError=validatePassword(value);
      setPageThreeErrors(Object.assign({}, pageThreeerrors, { "password": passwordError }));
    }
    if (name === "cnf_password") {
      (recruiterSignUpDetail.password !== value) ? setPasswordError(true) : setPasswordError(false);
    }

    if (name === "email") {
      const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
      (!emailRegex.test(recruiterSignUpDetail?.email)) ? setEmailError(true) : setEmailError(false)
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
      setHasError(true);
      console.log(error);
      setErrorMessage(error.response.data.message);
    });
  }


 

  const handlePageDecrease = async () => {
    if (page > 0) {
      setPage(prev => prev - 1);
    }
    else{
      navigate("/home");
    }
  }

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

    setDisable(false)
  }, [page]);

  
  return (
    <div className="flex flex-col items-center justify-center h-screen">
       {
            (hasError) ?
              <div className='-mb-24 z-50'> <Alert text={errorMessage} type="danger"  title={'Error'} /> </div> : null
          }
      <img src={logo} className='mb-2' />
      <div className=" p-8 w-full max-w-sm">
        {
          (loading) ? <Spinner /> :
            <div>
              <h1 className="text-2xl font-semibold mb-6">Sign Up</h1>
              {
                (page === 0) ?
                  <RecruiterSignUpPage1 companyList={companyList} handleChnageRecruiterDetails={handleChnageRecruiterDetails} errors={pageOnerrors} />
                  :
                  (page === 1) ?
                    <RecruiterSignUpPage2 handleChnageRecruiterDetails={handleChnageRecruiterDetails} emailError={emailError} errors={pageTworrors} />
                    :
                    (page === 2) ?
                      <RecruiterSignUpPage3 handleChnageRecruiterDetails={handleChnageRecruiterDetails} passwordError={passwordError} errors={pageThreeerrors}/>
                      :
                      (page === 3) ?
                        <OtpVerification handleChangeOtp={handleChangeOtp} />
                        : null
              }
            </div>
        }

        <div className="flex w-full">

          <button type="button"  className={`text-white w-1/2 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 
                  py-2.5 text-center mr-2 mb-2`} onClick={handlePageDecrease}>Back</button>

          <button type="button" disabled={disable} id="sign-in-button" className="sign-in-button w-1/2 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none
             focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2" onClick={handlePageIncrement}>{buttonText}</button>
        </div>
      </div>

    </div>
  )
}

export default RecruiterSignupForm
