import { IApplicantSignUpProps } from '../../../../../../@types/interfaces/props/ApplicantProps/ApplicantSignUpProps'

const SignUpPage1 = ({applicantDetails,handleChangeApplicantDetails,errors}:IApplicantSignUpProps) => {
    return (
        <div id='signup1'>
            <div className="mb-4">
                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-90">First Name<span className="text-red-500">*</span></label>
                <input type="text" id="first_name" name="first_name" defaultValue={applicantDetails.first_name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required onChange={(e) => handleChangeApplicantDetails(e)} />
                {(errors.first_name) ?
                    <p className="text-red-500">{errors.first_name}</p>
                    : null
                }
            </div>
            <div className="mb-4">
                <label htmlFor="middle_name" className="block mb-2 text-sm font-medium text-gray-900">Middle Name<span className="text-xs ml-1 text-gray-500">{"(optional)"}</span></label>
                <input type="text" id="middle_name" name="middle_name" defaultValue={applicantDetails.middle_name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required onChange={(e) => handleChangeApplicantDetails(e)} />
            </div>
            <div className="mb-4">
                <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900">Last Name<span className="text-red-500">*</span></label>
                <input type="text" id="last_name" name="last_name" defaultValue={applicantDetails.last_name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required onChange={(e) => handleChangeApplicantDetails(e)} />
                {(errors.last_name) ?
                    <p className="text-red-500">{errors.last_name}</p>
                    : null
                }
            </div>
        </div>
    )
}

export default SignUpPage1