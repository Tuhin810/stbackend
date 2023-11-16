
import { CompanyRegistrationProps } from '../../../../../@types/interfaces/props/companyProps/CompanyRegistrationProps'

const CompanyRegistrationPage1 = ({ handleChangeCompanyDetails, companyDetails }: CompanyRegistrationProps) => {
    return (
        <div>
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Company Name</label>
                <input type="text" id="name" name="name" className="mt-1 p-2 border rounded w-full focus:outline-none focus:ring focus:border-blue-300" defaultValue={companyDetails.name} onChange={(e) => handleChangeCompanyDetails(e)} />
            </div>
            <div className="mb-4">
                <label htmlFor="type" className="block text-gray-700 text-sm font-medium mb-1">Company Type</label>
                <select id="type" name="type" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" onChange={(e) => handleChangeCompanyDetails(e)}>
                    <option value="unregistered" selected={companyDetails.type === "unregistered"}>Unregistered</option>
                    <option value="pvt" selected={companyDetails.type === "pvt"}>Private Ltd.</option>
                    <option value="opc" selected={companyDetails.type === "opc"}>OPC</option>

                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" id="email" name="email" className="mt-1 p-2 border rounded w-full focus:outline-none focus:ring focus:border-blue-300" defaultValue={companyDetails.email} required onChange={(e) => handleChangeCompanyDetails(e)} />
            </div>
            <div className="">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input type="tel" id="phone" name="phone" className="mt-1 p-2 border rounded w-full focus:outline-none focus:ring focus:border-blue-300" defaultValue={companyDetails.phone} onChange={(e) => handleChangeCompanyDetails(e)} />
            </div>

        </div>

    )
}

export default CompanyRegistrationPage1