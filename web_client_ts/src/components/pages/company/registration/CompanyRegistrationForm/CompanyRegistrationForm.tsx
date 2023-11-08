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
        logo: "",
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
        if (page < 4) {
            setPage((count) => count + 1);
            console.log(page);
            if (page == 3) {
                setButtonText("Submit");
            }
            if (page == 3) {
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
        if (name === "pin" || name === "phone" || name === "no_of_workers" || name === "establish_year") {
            setCompanyDetails(Object.assign({}, companyDetails, { [name]: Number(value) }))
        }
        else {
            setCompanyDetails(Object.assign({}, companyDetails, { [name]: value }))
        }
    }, [companyDetails])

    const handleSubmit = async () => {
        const response = await registerNewCompany(companyDetails);
        if (response?.status === 200) {
            navigate('/recruiter/signup')
        }
    }



    const convertImageToUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader();

        if (e.target.files![0]) {
            reader.readAsDataURL(e.target.files![0]);
        } else {
            console.log("No file selected");
        }

        reader.onload = async (readerEvent: ProgressEvent<FileReader>) => {
            const url = readerEvent.target?.result;
            console.log("URL read:", url);

            setCompanyDetails((prevCompanyDetails) => {
                return { ...prevCompanyDetails, logo: url?.toString() };
            });

            // Now you can access the updated companyDetails.logo
            console.log("companyDetails.logo:", companyDetails.logo);
        };
    };

    useEffect(() => {
        console.log("companyDetails.logo in useEffect:", companyDetails.logo);
    }, [companyDetails.logo]);

    useEffect(() => {
        getStateSuggestionList(companyDetails.country);
    }, [])

    return (
        <div>
            <div className="flex flex-col items-center space-y-16 justify-center h-screen" id="company_registration">

                <img src={logo} />
                <ProgressStep currentStep={page + 1} stepcount={0} />
                <div className="w-full max-w-sm">
                    <div className="max-w-md mx-auto">
                        <h2 className="text-2xl font-semibold mb-4">Register Your <span className="text-blue-700"> Company </span></h2>


                        {
                            (page === 0) ?
                                <CompanyRegistrationPage1 handleChangeCompanyDetails={handleChangeCompanyDetails} />
                                : (page === 1) ? <>
                                    <CompanyRegistratioPage2 handleChangeCompanyDetails={handleChangeCompanyDetails} stateList={stateList} />
                                </>
                                    : (page === 2) ? <>
                                        <CompanyRegistrationPage3 handleChangeCompanyDetails={handleChangeCompanyDetails} />
                                    </>
                                        : (page === 3) ?
                                            <div className="flex gap-3">
                                                {(companyDetails.logo) ?
                                                    <img className="border-2 h-20 w-20  rounded-lg" src={companyDetails.logo} alt="" />
                                                    : <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-building-add" viewBox="0 0 16 16">
                                                        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Z" />
                                                        <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6.5a.5.5 0 0 1-1 0V1H3v14h3v-2.5a.5.5 0 0 1 .5-.5H8v4H3a1 1 0 0 1-1-1V1Z" />
                                                        <path d="M4.5 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z" />
                                                    </svg>
                                                }
                                                <label htmlFor="file">
                                                <div className="bg-blue-500 hover:bg-blue-600 cursor-pointer w-32 h-9 rounded-md flex justify-center items-center drop-shadow-lg shadow-blue-400 text-gray-100 ">
                                                   {
                                                    (!companyDetails.logo)?"Upload logo":"Change logo"
                                                   } </div>
                                                    </label>
                                                <input id="file" type="file" name="logo"
                                                    hidden
                                                    onChange={e => convertImageToUrl(e)}
                                                />
                                            </div>
                                            : null

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
