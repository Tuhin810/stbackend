import { IApplicantSignUpProps } from "../../../../../../@types/interfaces/props/ApplicantProps/ApplicantSignUpProps"

const SignUpPage2 = ({applicantDetails,errors, handleChangeApplicantDetails}:IApplicantSignUpProps) => {
    return (
        <div id='signup2'>
            <div className="mb-4">
            <label htmlFor="birth_year" className="block mb-2 text-sm font-medium text-gray-900">Gender<span className="text-red-500">*</span></label>
                    <select id="gender" name="gender" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " onChange={(e) => handleChangeApplicantDetails(e)}>
                        <option value="male" className="" defaultChecked={applicantDetails.gender==="male"}>Male</option>
                        <option value="female" defaultChecked={applicantDetails.gender==="female"}>Female</option>
                        <option value="Non-Binary" className="" defaultChecked={applicantDetails.gender==="Non-Binary"}>Non-Binary</option>
                        <option value="Other" defaultChecked={applicantDetails.gender==="Other"}>Other</option>
                        <option value="Perfer not to Answer" defaultChecked={applicantDetails.gender==="Perfer not to Answer"}>Perfer not to Answer</option>
                    </select>
            </div>
            <div className="mb-4">
                <label htmlFor="birth_year" className="block mb-2 text-sm font-medium text-gray-900">Birth Year<span className="text-xs ml-1 text-gray-500">{"(optional)"}</span></label>
                <input type="number" id="birth_year" name="birth_year" defaultValue={applicantDetails.birth_year} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required onChange={(e) => handleChangeApplicantDetails(e)} />
            </div>
            <div className="mb-4">
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Phone<span className="text-red-500">*</span></label>
                <input type="number" id="phone" name="phone" defaultValue={applicantDetails.phone} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required onChange={(e) => handleChangeApplicantDetails(e)} />
                {(errors.phone) ?
                    <p className="text-red-500">{errors.phone}</p>
                    : null
                }
            </div>
        </div>
    )
}

export default SignUpPage2