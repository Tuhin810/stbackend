import React, { useState } from "react"
import { CompanyDetails } from "../../../../@types/CompanyDetails";
import { registerNewCompany } from "../../../../utils/apis/company/company";
import { useNavigate } from "react-router-dom";

const CompanyRegistration = () => {
    const [page, setPage] = useState<number>(0);
    const [buttonText, setButtonText] = useState<string>("Next");
    const [companyDetails, setCompanyDetails] = useState<CompanyDetails>({} as CompanyDetails);
    const navigate = useNavigate();
    const handleNext = () => {
        if (page < 3) {
            setPage((count) => count + 1);
            console.log(page);
            if (page == 1) {
                setButtonText("Submit");
            }
            if (page == 2) {
                handleSubmit();
            }
        }
    }
    const handleBack = () => {
        if (page >= 0) {
            setPage((count) => count - 1);
            setButtonText("Next");
        }
    }
    const handleChangeCompanyName = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setCompanyDetails(Object.assign({}, companyDetails, {
            name: value
        }))
    }
    const handleChangeCompanyType = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target
        setCompanyDetails(Object.assign({}, companyDetails, {
            type: value
        }))
    }
    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setCompanyDetails(Object.assign({}, companyDetails, {
            email: value
        }))
    }
    const handleChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setCompanyDetails(Object.assign({}, companyDetails, {
            phone: value
        }))
    }
    const handleChangeCountry = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target;
        setCompanyDetails(Object.assign({}, companyDetails, {
            country: value
        }))
    }
    const handleChangeState = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target
        setCompanyDetails(Object.assign({}, companyDetails, {
            state: value
        }))
    }
    const handleChangePin = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setCompanyDetails(Object.assign({}, companyDetails, {
            pin: value
        }))
    }
    const handleChangeAddress = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setCompanyDetails(Object.assign({}, companyDetails, {
            address: value
        }))
    }
    const handleChangeGst = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setCompanyDetails(Object.assign({}, companyDetails, {
            gst_number: value
        }))
    }
    const handleChangeEmployees = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setCompanyDetails(Object.assign({}, companyDetails, {
            no_of_workers: value
        }))
    }
    const handleChangeYear = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setCompanyDetails(Object.assign({}, companyDetails, {
            establish_year: value
        }))
    }
    const handleChangeWebsite = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setCompanyDetails(Object.assign({}, companyDetails, {
            website: value
        }))
    }

    const handleSubmit = async () => {
        const response = await registerNewCompany(companyDetails);
        if (response?.status === 200) {
            navigate('/recruiter/signup')
        }
    }

    return (
        <div className="bg-gray-100 flex items-center justify-center h-screen" id="company_registration">
            <div className="container mx-auto py-8">
                <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Register Your <span className="text-cyan-400"> Company </span></h2>
                    {
                        (page === 0) ? <>
                            <div className="mb-4">
                                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name</label>
                                <input type="text" id="companyName" name="companyName" className="mt-1 p-2 border rounded w-full focus:outline-none focus:ring focus:border-blue-300" required onChange={(e) => handleChangeCompanyName(e)} />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="companyType" className="block text-gray-700 text-sm font-medium mb-1">Company Type</label>
                                <select id="companyType" name="companyType" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" onChange={(e) => handleChangeCompanyType(e)}>
                                    <option value="unregistered">Unregistered</option>
                                    <option value="pvt">Private Ltd.</option>
                                    <option value="opc">OPC</option>

                                </select>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                <input type="email" id="email" name="email" className="mt-1 p-2 border rounded w-full focus:outline-none focus:ring focus:border-blue-300" required onChange={(e) => handleChangeEmail(e)} />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                                <input type="tel" id="phone" name="phone" className="mt-1 p-2 border rounded w-full focus:outline-none focus:ring focus:border-blue-300" required onChange={(e) => handleChangePhone(e)} />
                            </div>
                        </> : (page === 1) ?
                            <>
                                <div className="mb-4">
                                    <label htmlFor="country" className="block text-gray-700 text-sm font-medium mb-1">Country</label>
                                    <select id="country" name="country" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" onChange={(e) => handleChangeCountry(e)}>
                                        <option value="usa">United States</option>
                                        <option value="canada">Canada</option>
                                        <option value="uk">United Kingdom</option>
                                        <option value="australia">Australia</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="mb-4 flex">
                                    <div className="w-1/2 pr-2">
                                        <label htmlFor="state" className="block text-gray-700 text-sm font-medium mb-1">State</label>
                                        <select id="state" name="state" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" onChange={(e) => handleChangeState(e)}>
                                            <option value="usa">West Bengal</option>
                                        </select>
                                    </div>
                                    <div className="w-1/2 pl-2">
                                        <label htmlFor="pin" className="block text-gray-700 text-sm font-medium mb-1">PIN</label>
                                        <input type="number" id="pin" name="pin" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" required onChange={(e) => handleChangePin(e)} />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Full Address</label>
                                    <input type="text" id="address" name="address" className="mt-1 p-2 border rounded w-full focus:outline-none focus:ring focus:border-blue-300" required onChange={(e) => handleChangeAddress(e)} />
                                </div>
                            </> : (page === 3) ? <>
                                <div className="mb-4">
                                    <label htmlFor="gst_number" className="block text-sm font-medium text-gray-700">GST_Number</label>
                                    <input type="text" id="gst_number" name="gst_number" className="mt-1 p-2 border rounded w-full focus:outline-none focus:ring focus:border-blue-300" required onChange={(e) => handleChangeGst(e)} />
                                </div>
                                <div className="mb-4 flex">
                                    <div className="w-1/2 pr-2">
                                        <label htmlFor="employee" className="block text-sm font-medium text-gray-700">No Of Employees</label>
                                        <input type="number" id="employee" name="employee" className="mt-1 p-2 border rounded w-full focus:outline-none focus:ring focus:border-blue-300" required onChange={(e) => handleChangeEmployees(e)} />
                                    </div>
                                    <div className="w-1/2 pl-2">
                                        <label htmlFor="year" className="block text-gray-700 text-sm font-medium mb-1">Established Year</label>
                                        <input type="number" id="year" name="year" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" required onChange={(e) => handleChangeYear(e)} />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="website" className="block text-sm font-medium text-gray-700">Company Website</label>
                                    <input type="text" id="website" name="website" className="mt-1 p-2 border rounded w-full focus:outline-none focus:ring focus:border-blue-300" required onChange={(e) => handleChangeWebsite(e)} />
                                </div>
                            </> : null
                    }


                    <div className="mt-6 flex justify-between">
                        {(page == 0) ?
                            <></> :
                            <button className="bg-cyan-700 text-white px-4 py-2 rounded hover:bg-cyan-800 focus:outline-none focus:ring focus:ring-blue-300 " onClick={handleBack}>
                                Back
                            </button>
                        }

                        <button className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-600 focus:outline-none focus:ring focus:ring-blue-300 " onClick={handleNext}>
                            {buttonText}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CompanyRegistration
