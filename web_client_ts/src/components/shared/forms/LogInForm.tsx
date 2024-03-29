import { LoginForms } from "../../../@types/interfaces/props/LogInFormProps"

const LogInForm = ({handleChangeEmail,handleChangePassword,emailError }:LoginForms) => {
    return (
        <div>
            <h1 className="text-2xl font-semibold mb-6">Login </h1>
            <div className="mb-4">
                <label htmlFor="userId" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                <input type="text" id="userId" name="userId" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required onChange={(e) => handleChangeEmail(e)} />
                {(emailError) ?
                <p className="text-red-500">Enter a valid email address</p>
                : null
            }
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                <input type="password" id="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required onChange={(e) => handleChangePassword(e)} />
            </div>
        </div>
    )
}

export default LogInForm
