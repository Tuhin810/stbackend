import { useContext, useEffect, useState } from 'react';

import { RecruiterLoginDetails } from '../../../../@types/RecruiterLoginDEtails';
import { LoginRecruiter} from '../../../../utils/apis/recruiter/recruiter';
import { Link, useNavigate } from 'react-router-dom';
import { recruiterContext } from '../../../../context/recruiterDetails/RecruiterContext';

import { globalContext } from '../../../../context/GlobalDetails/GlobalContext';

const RecruiterLogin = () => {
  const navigate = useNavigate();

  const [page, setPage] = useState<number>(0);
  const [button, setButton] = useState<string>('Next');
  const [recruiterSignUpDetail, setRecruiterSignUpDetail] = useState<RecruiterLoginDetails>({} as RecruiterLoginDetails);
  const recruiterState = useContext(recruiterContext)
  const globalState = useContext(globalContext);
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
      let recruiterDetails = response.data.recruiter as RecruiterLoginDetails;
      recruiterState.loggedIn(recruiterDetails);
      globalState.loggedIn("recruiter");
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
                <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">Email</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" required onChange={(e) => handleChangeEmail(e)} />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-1">Password</label>
                <input type="password" id="password" name="password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" required onChange={(e) => handleChangePassword(e)} />
              </div>
            </>
       


        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300" onClick={handleNext}>{button}</button>
        <p className="text-sm text-gray-600 mt-3">Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign up</a></p>
      </div>


    </div>
  )
}

export default RecruiterLogin
