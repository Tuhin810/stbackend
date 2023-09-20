import React, { useCallback, useEffect, useState } from "react"
import { CompanyDetails } from "../../../../../@types/CompanyDetails";
import { registerNewCompany } from "../../../../../utils/apis/company/company";
import { useNavigate } from "react-router-dom";
import { getStateList } from "../../../../../utils/apis/suggestion/Suggestion";
import CompanyRegistrationPage1 from "../companyRegitsrationPage1/CompanyRegistrationPage1";
import CompanyRegistratioPage2 from "../companyRegistrationPage2/CompanyRegistratioPage2";
import CompanyRegistrationPage3 from "../companyRegistrationPage3/CompanyRegistrationPage3";
import { logo } from "../../../../../assets/images";
import ProgressStep from "../../../../shared/ProgressStep/ProgressStep";

const CompanyRegistrationForm = () => {
    const navigate = useNavigate();
    const [page, setPage] = useState<number>(0);
    const [stateList, setStateList] = useState<string[]>([]);
    const [buttonText, setButtonText] = useState<string>("Next");
    const [companyDetails, setCompanyDetails] = useState<CompanyDetails>({
        name: "",
        type: "unregistered",
        email: "",
        country_code: "+91",
        phone: 0,
        state: "Andaman and Nicobar Islands",
        country: "india",
        pin: 0,
        address: "",
        gst_number: "",
        no_of_workers: 1,
        establish_year: 0,
        website: "",
        created_date: new Date()
    });

    const getStateSuggestionList = async (country: string) => {
        const response = await getStateList(country);
        if (response?.status === 200) {
            setStateList(response?.data.stateList);
        }
    }

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

    const handleChangeCompanyDetails = useCallback((event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        if(name==="pin" || name ==="phone" || name==="no_of_workers" || name ==="establish_year"){
            setCompanyDetails(Object.assign({}, companyDetails, { [name]: Number(value) }))
        }
        else{
            setCompanyDetails(Object.assign({}, companyDetails, { [name]: value }))
        }
    }, [companyDetails])

    const handleSubmit = async () => {
        const response = await registerNewCompany(companyDetails);
        if (response?.status === 200) {
            navigate('/recruiter/signup')
        }
    }

    useEffect(() => {
        getStateSuggestionList(companyDetails.country);
    }, [])

    return (
        <div>
            <div className="flex flex-col items-center space-y-16 justify-center h-screen" id="company_registration">
                <img src={logo}/>
                <ProgressStep currentStep={page+1}/>
                <div className="w-full max-w-sm">
                    <div className="max-w-md mx-auto">
                        <h2 className="text-2xl font-semibold mb-4">Register Your <span className="text-blue-700"> Company </span></h2>
                        {
                            (page === 0) ?
                                <CompanyRegistrationPage1 handleChangeCompanyDetails={handleChangeCompanyDetails}/>
                             : (page === 1) ?
                                   <CompanyRegistratioPage2 handleChangeCompanyDetails={handleChangeCompanyDetails} stateList={stateList}/>
                                 : (page === 2) ? <>
                                    <CompanyRegistrationPage3 handleChangeCompanyDetails={handleChangeCompanyDetails}/>
                                </> : null
                        }


                        <div className="mt-6 flex justify-between">
                            {(page == 0) ?
                                null :
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
        </div>
    )
}

export default CompanyRegistrationForm
