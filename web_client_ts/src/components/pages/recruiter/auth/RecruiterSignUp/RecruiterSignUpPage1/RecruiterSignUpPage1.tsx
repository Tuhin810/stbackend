import { Link } from "react-router-dom"
import { IRecruiterSignupProps } from "../../../../../../@types/interfaces/props/RecruiterSIgnUpProps/RecruiterSignUpProps"

const RecruiterSignUpPage1 = ({companyList,handleChnageRecruiterDetails,errors}:IRecruiterSignupProps) => {
    console.log(errors);
    
    return (
        <div>
            <div className="mb-2">
                <label htmlFor="company_id" className="block text-gray-700 text-sm font-medium mb-1">Company<span className="text-red-500">*</span></label>
                <select placeholder='Select Company Name' onChange={(e) => handleChnageRecruiterDetails(e)} id="company_id" name="company_id" className="w-full px-4 py-2 border border-2 focus:border-blue-300 rounded-md focus:outline-none  focus:border-blue-300">
                    <option value={"others"}>Select Company</option>
                    {
                        companyList!.map(company => {
                            return (
                                <option value={company._id}>{company.name}</option>
                            )
                        })
                    }
                </select>
            </div>
          
            <p className="text-sm text-gray-600 mb-2">If your company is not listed <Link to="/newCompany" className="text-blue-500 hover:underline">register here</Link></p>
            <div className="mb-4">
                <label htmlFor="first_name" className="block text-gray-700 text-sm font-medium mb-1 flex justify-between"><span>First Name <span className="text-red-500">*</span></span> </label>
                <input type="text" id="first_name" name="first_name" className={'w-full px-4 py-2 border border-2 focus:border-blue-300 rounded-md focus:outline-none  focus:border-blue-300'} required onChange={(e) => handleChnageRecruiterDetails(e)} />
                {(errors.first_name) ?
                    <p className="text-red-500">{errors.first_name}</p>
                    : null
                }
            </div>
            <div className="mb-4">
                <label htmlFor="last_name" className="block text-gray-700 text-sm font-medium mb-1 flex justify-between"><span>Last Name<span className="text-red-500">*</span></span></label>
                <input type="text" id="last_name" name="last_name" className={'w-full px-4 py-2 border border-2 focus:border-blue-300 rounded-md focus:outline-none  focus:border-blue-300'} required onChange={(e) => handleChnageRecruiterDetails(e)} />
                {(errors.last_name) ?
                    <p className="text-red-500">{errors.last_name}</p>
                    : null
                }
            </div>
        </div>
    )
}

export default RecruiterSignUpPage1