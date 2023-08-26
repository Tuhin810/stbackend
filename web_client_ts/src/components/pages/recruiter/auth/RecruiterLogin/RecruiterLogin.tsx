import { useContext, useEffect, useState } from 'react';

import { LoginRecruiter } from '../../../../../utils/apis/recruiter/recruiter';
import { useNavigate } from 'react-router-dom';
import { recruiterContext } from '../../../../../context/recruiterDetails/RecruiterContext';

import { globalContext } from '../../../../../context/GlobalDetails/GlobalContext';
import { RecruiterDetails } from '../../../../../@types/RecruiterDetails';
import { logo } from '../../../../../assets/images';

const RecruiterLogin = () => {
  const navigate = useNavigate();
  const [recruiterSignUpDetail, setRecruiterSignUpDetail] = useState<RecruiterDetails>({} as RecruiterDetails);
  const { dispatch } = useContext(recruiterContext);
  const { loggedIn } = useContext(globalContext);
  //email change
  const handleChangeEmail = (event: any) => {
    const { value } = event.target
    console.log("event", event)
    setRecruiterSignUpDetail(Object.assign({}, recruiterSignUpDetail, {
      email: value
    }))
  }
  //password change
  const handleChangePassword = (event: any) => {
    const { value } = event.target
    setRecruiterSignUpDetail(Object.assign({}, recruiterSignUpDetail, {
      password: value
    }))
  }
  //api calling function
  const loginRec = async () => {
    const response = await LoginRecruiter(recruiterSignUpDetail);
    if (response?.status === 200) {
      let recruiterDetails = response.data.recruiter as RecruiterDetails;
      dispatch({ type: "login", payload: recruiterDetails })
      loggedIn({ type: "login", userType: "recruiter" });
      navigate('/recruiter/jobs');
    }
  }
  //om hit login
  const handleLogin = () => {
    loginRec();
  }

  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center gap-y-10 h-screen">
      <img src={logo} />
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-semibold mb-6">Login </h1>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
          <input type="email" id="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={(e) => handleChangeEmail(e)} />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input type="password" id="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={(e) => handleChangePassword(e)} />
        </div>
        <button type="button" className=" w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={handleLogin}>Log In</button>
        <p className="text-sm text-gray-600 mt-3">Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign up</a></p>
      </div>


    </div>
  )
}

export default RecruiterLogin;
