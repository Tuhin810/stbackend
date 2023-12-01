import { IRecruiterSignupProps } from "../../../../../../@types/interfaces/props/RecruiterSIgnUpProps/RecruiterSignUpProps"

const RecruiterSignUpPage3 = ({handleChnageRecruiterDetails,errors}:IRecruiterSignupProps) => {
  return (
    <div>
        <div className="mb-4">
            <label htmlFor="password" className="text-gray-700 text-sm font-medium mb-1 flex justify-between">Password</label>
            <input type="password" id="password" name="password" className={'w-full px-4 py-2 border border-2 focus:border-blue-300 rounded-md focus:outline-none  focus:border-blue-300'} required onChange={(e) => handleChnageRecruiterDetails(e)} />
            {(errors.password) ?
                    <p className="text-red-500">{errors.password}</p>
                    : null}
        </div>
        <div className="mb-4">
            <label htmlFor="cnf_password" className="text-gray-700 text-sm font-medium mb-1 flex justify-between">Comfirm Password</label>
            <input type="text" id="cnf_password" name="cnf_password" className={'w-full px-4 py-2 border border-2 focus:border-blue-300 rounded-md focus:outline-none  focus:border-blue-300'} required onChange={(e) => handleChnageRecruiterDetails(e)} />
            
        </div>
    </div>
  )
}

export default RecruiterSignUpPage3