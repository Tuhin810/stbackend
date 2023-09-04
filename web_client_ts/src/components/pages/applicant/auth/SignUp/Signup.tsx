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

const Signup = () => {

  const navigate=useNavigate();

  const {applicantDispatch} = useContext(applicantContext);
  const {loggedIn} = useContext(globalContext); 

  const [page, setPage] = useState<number>(1);
  const [applicantDetails, setApplicantDetails] = useState<ApplicantDetails>({} as ApplicantDetails);
  const [buttonText, setButtonText] = useState<string>("Continue");
  const [passwordError,setPasswordError]=useState<boolean>(false);

  const handlePageIncrement = async() => {
    if (page < 3) {
      setPage(prev => prev + 1);
    }
    else if (page===3){
      await signUp();
    }
  }

  const handleChangeApplicantDetails = useCallback((event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    if(name==="cnf_password"){
      (applicantDetails.password!==value)?setPasswordError(true):setPasswordError(false);
    }
    setApplicantDetails(Object.assign({}, applicantDetails, { [name]: value }));
  }, [applicantDetails]);

  const signUp = async() =>{
    const response = await applicantSignUp(applicantDetails);
    if(response?.status===200){
      const resonseApplicant:ApplicantDetails=response?.data.user;
      applicantDispatch({type:"signup",payload:resonseApplicant})
      loggedIn({type:"login",userType:"applicant"});
      navigate("/applicant/profile");
    }
  }

  useEffect(() => {
    if (page === 3) {
      setButtonText("Sign Up")
    }
    else {
      setButtonText("Continue");
    }
  }, [page])

  return (
    <>
      <div className="applicant_signup" id="applicant_signup">
        <div className="bg-gray-100 flex flex-col items-center justify-center gap-y-10 h-screen">
          <img src={logo} />
          <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
            <h1 className="text-2xl font-semibold mb-2">Sign Up</h1>

            {
              (page === 1) ?
                <SignUpPage1 handleChangeApplicantDetails={handleChangeApplicantDetails} /> :
                (page === 2) ?
                  <SignUpPage2 handleChangeApplicantDetails={handleChangeApplicantDetails} /> :
                  (page === 3) ?
                    <SignUpPage3 handleChangeApplicantDetails={handleChangeApplicantDetails} passwordError={passwordError} /> :
                    null
            }

            <button type="button" className=" w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none
             focus:ring-blue-300 shadow-lg shadow-blue-500/50 dark:shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={handlePageIncrement}>{buttonText}</button>
            <p className="text-sm text-gray-600 mt-3">Already have an account? <a href="#" className="text-blue-500 hover:underline">Log In</a></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup