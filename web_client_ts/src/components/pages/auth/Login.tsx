import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserCredentials } from '../../../@types/UserCredential';
import { signIn } from '../../../utils/apis/auth/login';
import { userContext } from '../../../context/userDetails/UserContext';
import { UserDetails } from '../../../@types/UserDetails';
import { globalContext } from '../../../context/GlobalDetails/GlobalContext';


const Login = () => {

  const [email, setemail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const userState = useContext(userContext);
  const globalState = useContext(globalContext);
  const navigate = useNavigate();

  let userCredentail = {
    email: email,
    password: password
  }


  const login = async (userCredentail: UserCredentials) => {
    const response = await signIn(userCredentail);
    console.log(response);
    if (response?.status === 200) {
      let userDetails = response.data as UserDetails;
      userState.loggedIn(userDetails);
      globalState.loggedIn("user");
      navigate('/jobs');
    }
    else {
      console.log('n');
    }
  }

  return (
    <div>
      <div className='bg-gray-100'>
        <div className="h-screen py-10">
          <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
            <div className="hidden lg:block lg:w-1/2 bg-cover" style={{
              backgroundImage: `url("https://images.pexels.com/photos/4049870/pexels-photo-4049870.jpeg?auto=compress&cs=tinysrgb&w=600")`
            }}></div>
            <div className="w-full p-8 lg:w-1/2">
              <h2 className="text-2xl font-semibold text-gray-700 text-center">StarMark</h2>
              <p className="text-lg text-gray-600 text-center mb-2">Welcome back!</p>
              <div className="flex flex-col items-center">
                <button
                  className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
                >
                  <div className="bg-white p-2 rounded-full">
                    <svg className="w-4" viewBox="0 0 533.5 544.3">
                      <path
                        d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                        fill="#4285f4"
                      />
                      <path
                        d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                        fill="#34a853"
                      />
                      <path
                        d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                        fill="#fbbc04"
                      />
                      <path
                        d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                        fill="#ea4335"
                      />
                    </svg>
                  </div>
                  <span className="ml-4">
                    Sign In with Google
                  </span>
                </button>
              </div>

              {/* </LoginSocialGoogle> */}
              <div className="mt-4 flex items-center justify-between">
                <span className="border-b w-1/5 lg:w-1/4"></span>
                <a href="#" className="text-xs text-center text-gray-500 uppercase">or login with email</a>
                <span className="border-b w-1/5 lg:w-1/4"></span>
              </div>
              <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                <input value={email}
                  onChange={(e) => setemail(e.target.value)} className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" />
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                  <a href="#" className="text-xs text-gray-500">Forget Password?</a>
                </div>
                <input value={password}
                  onChange={(e) => setPassword(e.target.value)} className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" />
              </div>
              <div className="mt-8">
                <button
                  className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  onClick={() => { login(userCredentail) }}
                >
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-3">
                    Log In
                  </span>
                </button>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="border-b w-1/5 md:w-1/4"></span>
                <Link to="/auth" className="text-xs text-gray-500 uppercase">or sign up</Link>
                <span className="border-b w-1/5 md:w-1/4"></span>
              </div>
            </div>
          </div>
        </div>





      </div>


    </div>
  )
}

export default Login