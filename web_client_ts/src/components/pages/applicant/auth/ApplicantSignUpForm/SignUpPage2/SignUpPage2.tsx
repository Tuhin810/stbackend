import { IApplicantSignUpProps } from "../../../../../../@types/interfaces/props/ApplicantProps/ApplicantSignUpProps"

const SignUpPage2 = ({applicantDetails, handleChangeApplicantDetails}:IApplicantSignUpProps) => {
    return (
        <div id='signup2'>
            <div className="mb-4">
            <label htmlFor="gender" className="block text-gray-700 text-sm font-medium mb-1">Gender</label>
                    <select id="gender" name="gender" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" onChange={(e) => handleChangeApplicantDetails(e)}>
                        <option value="male" defaultChecked={applicantDetails.gender==="male"}>Male</option>
                        <option value="female" defaultChecked={applicantDetails.gender==="female"}>Fe Male</option>
                    </select>
            </div>
            <div className="mb-4">
                <label htmlFor="birth_year" className="block mb-2 text-sm font-medium text-gray-900">Birth Year</label>
                <input type="number" id="birth_year" name="birth_year" defaultValue={applicantDetails.birth_year} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required onChange={(e) => handleChangeApplicantDetails(e)} />
            </div>
            <div className="mb-4">
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Phone</label>
                <input type="number" id="phone" name="phone" defaultValue={applicantDetails.phone} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required onChange={(e) => handleChangeApplicantDetails(e)} />
            </div>
        </div>
    )
}

export default SignUpPage2