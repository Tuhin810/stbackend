import { useContext, useEffect, useState } from 'react';

import { LoginRecruiter} from '../../../../utils/apis/recruiter/recruiter';
import { useNavigate } from 'react-router-dom';
import { recruiterContext } from '../../../../context/recruiterDetails/RecruiterContext';

import { globalContext } from '../../../../context/GlobalDetails/GlobalContext';
import { RecruiterDetails } from '../../../../@types/RecruiterDetails';

const RecruiterLogin = () => {
  const navigate = useNavigate();

  const [page, setPage] = useState<number>(0);
  const [button, setButton] = useState<string>('Next');
  const [recruiterSignUpDetail, setRecruiterSignUpDetail] = useState<RecruiterDetails>({} as RecruiterDetails);
  const { dispatch } = useContext(recruiterContext);
  const {loggedIn} = useContext(globalContext);
  const handleNext = async () => {
    if (page == 0) {
      setPage(1);
      setButton("Submit");
    }
    else {
      console.log(page);
      await LoginRec();
    }
  }
  
  const handleChangeEmail = (event: any) => {
    const { value } = event.target
    console.log("event", event)
    setRecruiterSignUpDetail(Object.assign({}, recruiterSignUpDetail, {
      email: value
    }))
  }
  const handleChangePassword = (event: any) => {
    const { value } = event.target
    setRecruiterSignUpDetail(Object.assign({}, recruiterSignUpDetail, {
      password: value
    }))
  }

  const LoginRec = async () => {
    const response = await LoginRecruiter(recruiterSignUpDetail);
    if (response?.status===200) {
      let recruiterDetails = response.data.recruiter as RecruiterDetails;
      dispatch({ type: "login",payload:recruiterDetails })
      loggedIn({type:"login",userType:"recruiter"});
      navigate('/recruiter/jobs');
    }
  }
  console.log("recruiter sign-up", recruiterSignUpDetail)
  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-semibold mb-6">Login </h1>

       
            <>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input type="email" id="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={(e) => handleChangeEmail(e)} />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" id="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={(e) => handleChangePassword(e)} />
              </div>
            </>
       


        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300" onClick={handleNext}>{button}</button>
        <p className="text-sm text-gray-600 mt-3">Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign up</a></p>
      </div>


    </div>
  )
}

export default RecruiterLogin;
