import React, { useCallback, useContext, useEffect, useState } from "react"
import { ApplicantDetails } from "../../../../../@types/ApplicantDetails"
import SignUpPage1 from "./SignUpPage1/SignUpPage1";
import SignUpPage2 from "./SignUpPage2/SignUpPage2";
import SignUpPage3 from "./SignUpPage3/SignUpPage3";
import { logo } from "../../../../../assets/images"
import { applicantContext } from "../../../../../context/applicantDetails/ApplicantContext";
import { globalContext } from "../../../../../context/GlobalDetails/GlobalContext";
import { applicantSignUp } from "../../../../../utils/apis/auth/login";
import { useNavigate } from "react-router-dom";
import SignUpPage4 from "./SignUpPage4/SignUpPage4";
import { confirmationResult, sendOtp } from "../../../../../utils/service/firebase.service";
import Spinner from "../../../../shared/spinner/Spinner";
import ProgressStep from "../../../../shared/ProgressStep/ProgressStep";
import Alert from "../../../../shared/alert/Alert";
import ApplicantGoogleSignUp from "../ApplicantGoogleSignUp/ApplicantGoogleSignUp";

const ApplicantSignupForm = () => {

  const navigate = useNavigate();

  const { applicantDispatch } = useContext(applicantContext);
  const { loggedIn } = useContext(globalContext);
  const [otp, setOtp] = useState<string>("");
  const [disable, setDisable] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [buttonText, setButtonText] = useState<string>("Continue");
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [applicantDetails, setApplicantDetails] = useState<ApplicantDetails>({} as ApplicantDetails);
  const [password, setPassword] = useState();
  const [strength, setStrength] = useState('');

 

 
    const validatePassword = (password:any) => {
      let strengthLevel = 0;
      const lowerCase = /[a-z]/g;
      const upperCase = /[A-Z]/g;
      const numbers = /[0-9]/g;
      const specialChars = /[!@#$%^&*(),.?":{}|<>]/g;
  
      if(password.match(lowerCase)) strengthLevel++;
      if(password.match(upperCase)) strengthLevel++;
      if(password.match(numbers)) strengthLevel++;
      if(password.match(specialChars)) strengthLevel++;
  
      switch(strengthLevel) {
        case 1:
          return 'Weak'
          break;
        case 2:
          return 'Medium'
          
          break;
        case 3:
          return 'Strong'
          
          break;
        case 4:
          return 'Very Strong'
          break;
        default:
          return 'Very Weak'
          
      }
    }
  
  
  const handlePageIncrement = async () => {
    if (page === 1) {
      if (applicantDetails.first_name === "" || applicantDetails.last_name === "") {
        return;
      }
    }
    if (page === 2) {
      if (applicantDetails.birth_year === 1900 || applicantDetails.phone === 0) {
        return;
      }
    }
    if (page === 3) {
      if (applicantDetails.email === "" || applicantDetails.password === "") {
        return;
      }
    }
    if (page < 4) {
      setPage(prev => prev + 1);
    }
    if (page === 3) {
      senOtpToPhone();
    }
    else if (page === 4) {
      console.log("page 4");
      await validateOtp();
    }
  }

  const handlePageDecrease = async () => {
    if (page > 1) {
      setPage(prev => prev - 1);
    }
    else {
      navigate("/home");
    }
  }

  


  const handleChangeApplicantDetails = useCallback((event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    if (name === "password") {
      validatePassword(applicantDetails?.password)
      console.log("strenngth",strength);
      
    }
    if (name === "cnf_password") {
      (applicantDetails.password !== value) ? setPasswordError(true) : setPasswordError(false);
    }
    if (name === "email") {
      const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
      (!emailRegex.test(applicantDetails?.email)) ? setEmailError(true) : setEmailError(false)
    }
    setApplicantDetails(Object.assign({}, applicantDetails, { [name]: value }));
  }, [applicantDetails]);

  const handleChangeOtp = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setOtp(value);
  }

  const senOtpToPhone = () => {
    const phone = "+91" + applicantDetails.phone.toString();
    sendOtp(phone);
  }

  const validateOtp = async () => {
    confirmationResult.confirm(otp).then(async () => {
      await signUp();
    }).catch((error) => {
      // setInvalidOtp(true);
      console.log(error);
    });
  }

  const signUp = async () => {
    setLoading(true);
    await applicantSignUp(applicantDetails).then(response => {
      setLoading(false);
      if (response?.status === 200) {
        const responseApplicant: ApplicantDetails = response?.data.user;
        applicantDispatch({ type: "signup", payload: responseApplicant })
        loggedIn({ type: "login", userType: "applicant" });
        navigate("/applicant");
      }
    }).catch(error => {
      setLoading(false);
      setHasError(true);
     
      setErrorMessage(error.response.data.message);
    })
  }

  useEffect(() => {
    if (page === 4) {
      setButtonText("Sign Up")
    }
    else {
      setButtonText("Continue");
    }
  }, [page]);

  useEffect(() => {
    setDisable(false)
  }, [])

  return (
    <>
      <div className="applicant_signup" id="applicant_signup">
        <div className="flex flex-col items-center justify-center gap-y-6 h-screen w-full px-5">
          {
            (hasError) ?
              <div className='-mb-24 z-50'> <Alert text={errorMessage} type="danger" color={'red'} img={''} title={'Error'} /> </div> : null
          }
          <img src={logo} />
          <ProgressStep currentStep={page} stepcount={4} />
          {
            (loading) ? <Spinner /> :
              <div className=" w-full max-w-sm">
                <h1 className="text-2xl font-semibold mb-8">Sign <span className="text-indigo-700">Up</span> <span className="text-xs ml-1  text-gray-500">{"(* quistions are required to answer)"}</span></h1>

                {
                  (page === 1) ?
                    <SignUpPage1 applicantDetails={applicantDetails} handleChangeApplicantDetails={handleChangeApplicantDetails} /> : null
                }
                {
                  (page === 2) ?
                    <SignUpPage2 applicantDetails={applicantDetails} handleChangeApplicantDetails={handleChangeApplicantDetails} passwordError={passwordError} /> :
                    null
                }
                {
                  (page === 3) ?
                    <SignUpPage3 applicantDetails={applicantDetails} handleChangeApplicantDetails={handleChangeApplicantDetails} emailError={emailError} passwordError={passwordError} /> :
                    null
                }
                {
                  (page === 4) ?
                    <SignUpPage4 handleChangeOtp={handleChangeOtp} /> : null
                }

                <div className="flex w-full">
                  <button type="button" className="text-white w-1/2 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 
                  py-2.5 text-center mr-2 mb-2" onClick={handlePageDecrease}>Back</button>

                  <button type="button" disabled={disable} id="sign-in-button" className="sign-in-button w-1/2 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none
             focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2" onClick={handlePageIncrement}>{buttonText}</button>
                </div>
                <ApplicantGoogleSignUp applicantDetails={applicantDetails} setErrorMessage={setErrorMessage} setHasError={setHasError} setLoading={setLoading} key={0} />
              </div>
          }
        </div>
      </div>
    </>
  )
}

export default ApplicantSignupForm