import { useContext, useState } from 'react';

import { LoginRecruiter } from '../../../../../utils/apis/recruiter/recruiter';
import { useNavigate } from 'react-router-dom';
import { recruiterContext } from '../../../../../context/recruiterDetails/RecruiterContext';

import { globalContext } from '../../../../../context/GlobalDetails/GlobalContext';
import { RecruiterDetails } from '../../../../../@types/RecruiterDetails';
import { logo } from '../../../../../assets/images';
import LogInForm from '../../../../shared/forms/LogInForm';

const RecruiterLogin = () => {
  const navigate = useNavigate();
  const [recruiterSignUpDetail, setRecruiterSignUpDetail] = useState<RecruiterDetails>({} as RecruiterDetails);
  const { dispatch } = useContext(recruiterContext);
  const { loggedIn } = useContext(globalContext);
  //email change
  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setRecruiterSignUpDetail(Object.assign({}, recruiterSignUpDetail, {
      email: value
    }))
  }
  //password change
  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setRecruiterSignUpDetail(Object.assign({}, recruiterSignUpDetail, {
      password: value
    }))
  }
  //api calling function
  const loginRec = async () => {
     await LoginRecruiter(recruiterSignUpDetail).then(response=>{
      if (response?.status === 200) {
        const recruiterDetails = response.data.recruiter as RecruiterDetails;
        dispatch({ type: "login", payload: recruiterDetails })
        loggedIn({ type: "login", userType: "recruiter" });
        navigate('/recruiter/jobs');
      }
     })
  }
  //om hit login
  const handleLogin = () => {
    loginRec();
  }

  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center gap-y-10 h-screen">
      <img src={logo} />
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <LogInForm handleChangeEmail={handleChangeEmail} handleChangePassword={handleChangePassword}/>
        <button type="button" className=" w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 darkno:focus:ring-blue-800 shadow-lg shadow-blue-500/50 darkno:shadow-lg darkno:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={handleLogin}>Log In</button>
        <p className="text-sm text-gray-600 mt-3">Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign up</a></p>
      </div>
    </div>
  )
}

export default RecruiterLogin;
