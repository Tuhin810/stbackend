import { useContext, useState } from 'react';

import { LoginRecruiter } from '../../../../../utils/apis/recruiter/recruiter';
import { Link, useNavigate } from 'react-router-dom';
import { recruiterContext } from '../../../../../context/recruiterDetails/RecruiterContext';

import { globalContext } from '../../../../../context/GlobalDetails/GlobalContext';
import { RecruiterDetails } from '../../../../../@types/RecruiterDetails';
import { logo } from '../../../../../assets/images';
import LogInForm from '../../../../shared/forms/LogInForm';
import Spinner from '../../../../shared/spinner/Spinner';
import { UserCredentials } from '../../../../../@types/UserCredential';
import Alert from '../../../../shared/alert/Alert';

const RecruiterLoginForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [recruiterLoginCredential, setRecruiterLoginCredential] = useState<UserCredentials>({} as UserCredentials);
  const { dispatch } = useContext(recruiterContext);
  const { loggedIn } = useContext(globalContext);
  //email change
  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setRecruiterLoginCredential(Object.assign({}, recruiterLoginCredential, {
      userId: value
    }))
  }
  //password change
  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setRecruiterLoginCredential(Object.assign({}, recruiterLoginCredential, {
      password: value
    }))
  }
  //api calling function
  const loginRec = async () => {
    setLoading(true);
    setHasError(false);
    await LoginRecruiter(recruiterLoginCredential).then(response => {
      setLoading(false);
      if (response?.status === 200) {
        const recruiterDetails = response.data.recruiter as RecruiterDetails;
        dispatch({ type: "login", payload: recruiterDetails })
        loggedIn({ type: "login", userType: "recruiter" });
        navigate('/recruiter/jobs');
      }
    }).catch(error => {
      setLoading(false);
      console.log(error);
      setHasError(true);
      setErrorMsg(error.response.data.message);
    })
  }
  //om hit login
  const handleLogin = () => {
    loginRec();
  }

  return (
    <div className="flex flex-col items-center justify-center gap-y-10 h-screen">
      {(hasError) ?<> <Alert text={errorMsg} type="danger" color={'red'} img={''} title={'Error'} /> </>:null}
      <img src={logo} />
      {
          (loading) ? <Spinner /> :
            <div className="p-8 rounded w-full max-w-sm">
              <LogInForm handleChangeEmail={handleChangeEmail} handleChangePassword={handleChangePassword} />
              <button type="button" className=" w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br   shadow-lg shadow-blue-500/50  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={handleLogin}>Log In</button>
              <p className="text-sm text-gray-600 mt-3">Don't have an account? <Link to="/recruiter/signup" className="text-blue-500 hover:underline">Sign up</Link></p>
            </div>
      }

    </div>
  )
}

export default RecruiterLoginForm;
