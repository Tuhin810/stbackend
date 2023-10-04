import { IRecruiterSignupProps } from "../../../../../../@types/interfaces/props/RecruiterSIgnUpProps/RecruiterSignUpProps"

const RecruiterSignUpPage2 = ({handleChnageRecruiterDetails}:IRecruiterSignupProps) => {
    return (
        <div>
            <div className="mb-4">
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Phone</label>
                <input type="number" id="phone" name="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required onChange={(e) => handleChnageRecruiterDetails(e)} />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                <input type="email" id="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required onChange={(e) => handleChnageRecruiterDetails(e)} />
            </div>
        </div>
    )
}

export default RecruiterSignUpPage2