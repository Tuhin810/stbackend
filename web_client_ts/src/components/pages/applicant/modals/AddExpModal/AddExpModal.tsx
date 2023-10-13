import { useCallback, useContext, useState } from "react"

import { hideModal } from "../../../../../utils/commonFunctions/HandleModal"
import { ApplicantExperience } from "../../../../../@types/interfaces/ApplicantExp"
// import { updateApplicantExp } from "../../../../../utils/apis/applicant/Applicant";
import { applicantContext } from "../../../../../context/applicantDetails/ApplicantContext";
// import { DegreeSuggestion } from "../../../../../constants/degreesSuggestion";

import { updateApplicantExperience } from "../../../../../utils/apis/applicant/Applicant";

const AddExpModal = () => {
    const { applicantDispatch } = useContext(applicantContext);
    const { applicantloggedinDetails } = useContext(applicantContext);
    const [ExpDetails, setExpDetails] = useState<ApplicantExperience>({
        "company": "null",
        "start_year": "null",

        "end_year": "null",
        "job_role": "null",
        "job_details": "null",
        "is_currently_working": false
    });

    const handleChangeExpDetails = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setExpDetails(Object.assign({}, ExpDetails, { [name]: value }));
    }, [ExpDetails]);

    const handleSubmit = async () => {
        try {
            const response = await updateApplicantExperience(applicantloggedinDetails.applicantDetails._id!, ExpDetails);
        if (response?.status === 200) {
            applicantDispatch({ type: "updateDetails", payload: response?.data.data })
            hideModal('addExp')
        }
        } catch (error) {
            console.log(error);
            
        }
        
    }
    return (
        <div>
            <div id="addExp" className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm hidden">
                <div className="relative w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-xl shadow darkno:bg-gray-700">
                        <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto
                         inline-flex justify-center items-center darkno:hover:bg-gray-600 darkno:hover:text-white" data-modal-hide="authentication-modal"
                            onClick={() => { hideModal("addExp") }}>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="px-6 py-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-medium text-gray-900 darkno:text-white">Enter Your<span className="text-blue-600">Experience </span>Details</h3>
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="company" className="block mb-2 text-sm font-medium text-blue-600 darkno:text-white">Company<span className="text-black"> Name</span></label>
                                    <input type="text" name="company" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="St. Pauls School" required onChange={(e) => { handleChangeExpDetails(e) }} />
                                </div>
                                <div>
                                    <label htmlFor="job_role" className="block mb-2 text-sm font-medium text-blue-600 darkno:text-white">Job<span className="text-black"> Role</span></label>
                                    <input type="text" name="job_role" id="job_role" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="St. Pauls School" required onChange={(e) => { handleChangeExpDetails(e) }} />
                                </div>
                                <div className="mb-4 flex">
                                    <div className="w-1/2 pr-2">
                                        <label htmlFor="start_year" className="block font-medium text-blue-600">From</label>
                                        <input type="number" id="start_year" name="start_year" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring
                                         focus:border-blue-300" onChange={(e) => { handleChangeExpDetails(e) }} />
                                    </div>
                                    <div className="w-1/2 pl-2">
                                        <label htmlFor="end_year" className="block text-blue-600 text-sm font-medium mb-1">To</label>
                                        <input type="number" id="end_year" name="end_year" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring
                                         focus:border-blue-300" required onChange={(e) => { handleChangeExpDetails(e) }} />
                                    </div>
                                </div>
                                <button className="w-full inline-flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
                                font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={handleSubmit}>
                                    Add Experience
                                    <svg className="w-4 h-4 ms-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.153 15 19 8l-4.847-7H1l4.848 7L1 15h13.153Z" />
                                    </svg>
                                </button>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>


    )
}

export default AddExpModal
