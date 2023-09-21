import { IApplicantSignUpProps } from "../../../../../../@types/interfaces/props/ApplicantProps/ApplicantSignUpProps"

const SignUpPage3 = ({applicantDetails, handleChangeApplicantDetails, passwordError }: IApplicantSignUpProps) => {

    return (
        <div id='signup2'>
            <div className="mb-4">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-90">Email</label>
                <input type="email" id="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required onChange={(e) => handleChangeApplicantDetails(e)} />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                <input type="password" id="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required onChange={(e) => handleChangeApplicantDetails(e)} />
            </div>
            <div className="mb-4">
                <label htmlFor="cnf_password" className="block mb-2 text-sm font-medium text-gray-900">Confirm Password</label>
                <input type="password" id="cnf_password" name="cnf_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required onChange={(e) => handleChangeApplicantDetails(e)} />
                {(passwordError) ?
                    <p className="text-red-500">Password Does not match</p>
                    : null
                }
            </div>
        </div>
    )
}

export default SignUpPage3