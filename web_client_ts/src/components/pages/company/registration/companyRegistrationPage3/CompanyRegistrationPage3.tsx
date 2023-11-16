import { CompanyRegistrationProps } from '../../../../../@types/interfaces/props/companyProps/CompanyRegistrationProps'

const CompanyRegistrationPage3 = ({ companyDetails, handleChangeCompanyDetails }: CompanyRegistrationProps) => {
    return (
        <div className='page3'>
            <div className="mb-4">
                <label htmlFor="gst_number" className="block text-sm font-medium text-gray-700">GST_Number</label>
                <input type="text" id="gst_number" name="gst_number" defaultValue={companyDetails.gst_number} className="mt-1 p-2 border rounded w-full focus:outline-none focus:ring focus:border-blue-300" required onChange={(e) => handleChangeCompanyDetails(e)} />
            </div>
            <div className="mb-4 flex">
                <div className="w-1/2 pr-2">
                    <label htmlFor="no_of_workers" className="block text-sm font-medium text-gray-700">No Of Employees</label>
                    <input type="number" id="no_of_workers" name="no_of_workers" defaultValue={companyDetails.no_of_workers} className="mt-1 p-2 border rounded w-full focus:outline-none focus:ring focus:border-blue-300" required onChange={(e) => handleChangeCompanyDetails(e)} />
                </div>
                <div className="w-1/2 pl-2">
                    <label htmlFor="establish_year" className="block text-gray-700 text-sm font-medium mb-1">Established Year</label>
                    <input type="number" id="establish_year" name="establish_year" defaultValue={companyDetails.establish_year} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" required onChange={(e) => handleChangeCompanyDetails(e)} />
                </div>
            </div>
            <div className="mb-4">
                <label htmlFor="website" className="block text-sm font-medium text-gray-700">Company Website</label>
                <input type="text" id="website" name="website" className="mt-1 p-2 border rounded w-full focus:outline-none focus:ring focus:border-blue-300" required onChange={(e) => handleChangeCompanyDetails(e)} />
            </div>
            <div className="flex items-center justify-start  gap-2">


            </div>
        </div>
    )
}

export default CompanyRegistrationPage3