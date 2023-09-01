import { CompanyRegistrationProps2 } from '../../../../../@types/interfaces/props/companyProps/CompanyRegistrationProps2'

const CompanyRegistratioPage2 = ({ handleChangeCompanyDetails, stateList }: CompanyRegistrationProps2) => {
    return (
        <div>
            <div className="mb-4">
                <label htmlFor="country" className="block text-gray-700 text-sm font-medium mb-1">Country</label>
                <select id="country" name="country" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" onChange={(e) => handleChangeCompanyDetails(e)}>
                    <option value="india">India</option>
                    <option value="bangladesh">Bangladesh</option>
                </select>
            </div>
            <div className="mb-4 flex">
                <div className="w-1/2 pr-2">
                    <label htmlFor="state" className="block text-gray-700 text-sm font-medium mb-1">State</label>
                    <select id="state" name="state" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" onChange={(e) => handleChangeCompanyDetails(e)}>
                        {
                            stateList.map((state, value) => {
                                return (
                                    <option value={state} key={value}>{state}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="w-1/2 pl-2">
                    <label htmlFor="pin" className="block text-gray-700 text-sm font-medium mb-1">PIN</label>
                    <input type="number" id="pin" name="pin" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" required onChange={(e) => handleChangeCompanyDetails(e)} />
                </div>
            </div>
            <div className="mb-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Full Address</label>
                <input type="text" id="address" name="address" className="mt-1 p-2 border rounded w-full focus:outline-none focus:ring focus:border-blue-300" required onChange={(e) => handleChangeCompanyDetails(e)} />
            </div>
        </div>
    )
}

export default CompanyRegistratioPage2