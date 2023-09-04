import { IApplicantSignUpProps } from '../../../../../../@types/interfaces/props/ApplicantProps/ApplicantSignUpProps'

const SignUpPage1 = ({handleChangeApplicantDetails}:IApplicantSignUpProps) => {
    return (
        <div id='signup1'>
            <div className="mb-4">
                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-90">First Name</label>
                <input type="text" id="first_name" name="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required onChange={(e) => handleChangeApplicantDetails(e)} />
            </div>
            <div className="mb-4">
                <label htmlFor="middle_name" className="block mb-2 text-sm font-medium text-gray-900">Middle Name</label>
                <input type="text" id="middle_name" name="middle_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required onChange={(e) => handleChangeApplicantDetails(e)} />
            </div>
            <div className="mb-4">
                <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900">Last Name</label>
                <input type="text" id="last_name" name="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required onChange={(e) => handleChangeApplicantDetails(e)} />
            </div>
        </div>
    )
}

export default SignUpPage1