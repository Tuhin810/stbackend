import { logo } from "../../../../../assets/images"
import ProgressStep from "../../../../shared/ProgressStep/ProgressStep"
import LogInForm from "../../../../shared/forms/LogInForm"

const Signup = () => {
  return (
    <div className="applicant_signup" id="applicant_signup">
      <div className="bg-gray-100 flex flex-col items-center justify-center gap-y-10 h-screen">
      <img src={logo} />
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
      <h1 className="text-2xl font-semibold mb-2">Login </h1>
            <div className="mb-3">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                <input type="email" id="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required  />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                <input type="password" id="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
            </div>
        <button type="button" className=" w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 dark:shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" >Log In</button>
        <p className="text-sm text-gray-600 mt-3">Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign up</a></p>
      </div>
    </div>
    </div>
  )
}

export default Signup