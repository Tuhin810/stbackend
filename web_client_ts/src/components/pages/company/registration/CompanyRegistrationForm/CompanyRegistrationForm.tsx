import React, { useCallback, useEffect, useState } from "react"
import { CompanyDetails } from "../../../../../@types/CompanyDetails";
import { registerNewCompany } from "../../../../../utils/apis/company/company";
import { useNavigate } from "react-router-dom";
import CompanyRegistrationPage1 from "../companyRegitsrationPage1/CompanyRegistrationPage1";
import CompanyRegistratioPage2 from "../companyRegistrationPage2/CompanyRegistratioPage2";
import CompanyRegistrationPage3 from "../companyRegistrationPage3/CompanyRegistrationPage3";
import { logo, warning } from "../../../../../assets/images";
import ProgressStep from "../../../../shared/ProgressStep/ProgressStep";
import { hideModal, showModal } from "../../../../../utils/commonFunctions/HandleModal";
import WarningModal from "../../../../shared/warningModal/WarningModal";
import { StateList } from "../../../../../constants/stateSuggestion";
import CompanyRegistrationPage4 from "../companyRegistrationPage4/CompanyRegistrationPage4";
import { validateName } from "../../../../../utils/commonFunctions/validateName";
import { validatePhone } from "../../../../../utils/commonFunctions/validatePhone";

const CompanyRegistrationForm = () => {
    const navigate = useNavigate();
    const [page, setPage] = useState<number>(0);
    const [pageOnerrors, setPageOnerrors] = useState<{ first_name?: string; email?: string ;phone?: string }>({});
    // const [pageTworrors, setPageTwoErrors] = useState<{ phone?: string }>({});
    // const [pageThreeerrors, setPageThreeErrors] = useState<{ email?: string; password?: string }>({});
    const [buttonText, setButtonText] = useState<string>("Next");
    const [warningMsg, setWarningMsg] = useState<string>("");
    const [companyDetails, setCompanyDetails] = useState<CompanyDetails>({
        name: "",
        type: "unregistered",
        email: "",
        country_code: "+91",
        logo: "",
        phone: 0,
        state: StateList[0],
        country: "india",
        pin: 0,
        address: "",
        gst_number: "",
        no_of_workers: 1,
        establish_year: 0,
        website: "",
        created_date: new Date()
    });

    const handleOpenWarning = () => {
        showModal("warningModal");
    }
    const handleNext = () => {
        if (page === 0) {
            if (companyDetails.name === "" || companyDetails.email === "" || companyDetails.phone === 0 || companyDetails.email === "") {
                setWarningMsg("Company Name, Email, Phone Number can not be blank")
                handleOpenWarning();
                return;
            }
           
        }
        if (page === 1) {
            if (companyDetails.pin === 0 || companyDetails.address === "") {
                setWarningMsg("Postal Code, Company Address can not be blank")
                handleOpenWarning();
                return;
            }
            
        }
        if (page === 2) {
            if (companyDetails.establish_year === 0 || companyDetails.no_of_workers === 0) {
                setWarningMsg("Company Establish Year or Employee Number can not be blank")
                handleOpenWarning();
            }
        }
        if (page === 3) {
            handleSubmit();
            return;
        }
        setPage((count) => count + 1);
    }
    const handleBack = () => {
        if (page >= 0) {
            setPage((count) => count - 1);
            setButtonText("Next");
            return;
        }
        navigate("/home");
        return;
    }

    const handleChangeCompanyDetails = useCallback((event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        if(name==="name"){
            const nameError=validateName(value,name);
            setPageOnerrors(Object.assign({}, pageOnerrors, { [name]: nameError }))
            setCompanyDetails(Object.assign({},  companyDetails, { [name]: Number(value) }));
          }
        if (name === "pin" || name === "phone" || name === "no_of_workers" || name === "establish_year") {
            setCompanyDetails(Object.assign({}, companyDetails, { [name]: Number(value) }))
        }
        if(name==="phone"){
            const phoneError=validatePhone(value);
            setPageOnerrors(Object.assign({}, pageOnerrors, { "phone": phoneError }))
            setCompanyDetails(Object.assign({}, companyDetails, { [name]: Number(value) }));
          }
        // if (name === "email") {
        //     const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
        //     (!emailRegex.test(companyDetails?.email)) ? setEmailError(true) : setEmailError(false)
        //   }
        //   if(name==="email"){
        //     const emailError=validateEmail(value);
        //     setPageOnerrors(Object.assign({}, pageOnerrors, { "email": emailError }))
        //     setCompanyDetails(Object.assign({}, companyDetails, { [name]: Number(value) }));
        //   }
        else {
            setCompanyDetails(Object.assign({}, companyDetails, { [name]: value }))
        }
    }, [companyDetails])

    const handleSubmit = async () => {
        const response = await registerNewCompany(companyDetails);
        if (response?.status === 200) {
            navigate('/employer/signup')
        }
    }

    useEffect(() => {
        console.log("companyDetails.logo in useEffect:", companyDetails.logo);
    }, [companyDetails.logo]);

    useEffect(() => {
        if (page == 3) {
            setButtonText("Submit");
        }
    }, [page])

    return (
        <div>
            <div className="flex flex-col items-center justify-center h-screen" id="company_registration">
                <img src={logo} className="mb-4"/>
                <ProgressStep currentStep={page + 1} stepcount={4} />
                <div className="w-full max-w-sm">
                        <h2 className="text-2xl font-semibold mb-4">Register Your <span className="text-blue-700"> Company </span></h2>
                        {
                            (page === 0) ?
                                <CompanyRegistrationPage1 companyDetails={companyDetails} setCompanyDetails={setCompanyDetails} handleChangeCompanyDetails={handleChangeCompanyDetails} errors={pageOnerrors}/> : null
                        }
                        {
                            (page === 1) ?
                                <CompanyRegistratioPage2 companyDetails={companyDetails} handleChangeCompanyDetails={handleChangeCompanyDetails} stateList={StateList} /> : null
                        }
                        {
                            (page === 2) ?
                                <CompanyRegistrationPage3 companyDetails={companyDetails} setCompanyDetails={setCompanyDetails} handleChangeCompanyDetails={handleChangeCompanyDetails} /> : null
                        }
                        {
                            (page === 3) ?
                                <CompanyRegistrationPage4 companyDetails={companyDetails} setCompanyDetails={setCompanyDetails} handleChangeCompanyDetails={handleChangeCompanyDetails} /> : null
                        }

                        <div className="flex w-full mt-5">

                            <button type="button" className={`text-white w-1/2 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 
                                py-2.5 text-center mr-2 mb-2`} onClick={handleBack}>Back</button>

                            <button type="button" id="sign-in-button" className="sign-in-button w-1/2 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none
                                 focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2" onClick={handleNext}>{buttonText}</button>
                        </div>
                </div>
            </div>
            <WarningModal id="warningModal" leftButtonText="Fill Those" rightButtontext="Close" leftMethod={() => { hideModal("warningModal") }} rightMethod={() => { hideModal("warningModal") }} Img={warning} message={warningMsg} key={0} />
        </div>
    )
}

export default CompanyRegistrationForm
