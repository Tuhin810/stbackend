import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { globalContext } from '../../../../../context/GlobalDetails/GlobalContext';
import { logo } from '../../../../../assets/images';
import LogInForm from '../../../../shared/forms/LogInForm';
import { ApplicantDetails } from '../../../../../@types/ApplicantDetails';
import { applicantContext } from '../../../../../context/applicantDetails/ApplicantContext';
import { applicantSignIn } from '../../../../../utils/apis/auth/login';
import { UserCredentials } from '../../../../../@types/UserCredential';

const Login = () => {
  const navigate = useNavigate();
  const [applicantCredential, setApplicantCredential] = useState<UserCredentials>({} as UserCredentials);
  const { applicantDispatch } = useContext(applicantContext);
  const { loggedIn } = useContext(globalContext);
  //email change
  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    console.log("event", event)
    setApplicantCredential(Object.assign({}, applicantCredential, {
      email: value
    }))
  }
  //password change
  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setApplicantCredential(Object.assign({}, applicantCredential, {
      password: value
    }))
  }
  //api calling function
  const loginApplicant = async () => {
    await applicantSignIn(applicantCredential).then(response => {
      if (response?.status === 200) {
        const applicantDetails = response.data.applicant as ApplicantDetails;
        applicantDispatch({ type: "login", payload: applicantDetails })
        loggedIn({ type: "login", userType: "applicant" });
        navigate('/applicant/profile');
      }
    })
  }
  //om hit login
  const handleLogin = () => {
    loginApplicant();
  }

  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center gap-y-10 h-screen">
      <img src={logo} />
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <LogInForm handleChangeEmail={handleChangeEmail} handleChangePassword={handleChangePassword} />
        <button type="button" className=" w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={handleLogin}>Log In</button>
        <p className="text-sm text-gray-600 mt-3">Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign up</a></p>
      </div>
    </div>
  )
}

export default Login;
