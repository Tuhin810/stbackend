import { useCallback, useContext, useState } from "react";
import { hideModal } from "../../../../../utils/commonFunctions/HandleModal"
import { applicantContext } from "../../../../../context/applicantDetails/ApplicantContext";
import { ApplicantDetails } from "../../../../../@types/ApplicantDetails";
import { updateApplicantDetailsById } from "../../../../../utils/apis/applicant/Applicant";

const SocialMediaModal = () => {
    const { applicantDispatch } = useContext(applicantContext);
    const { applicantloggedinDetails } = useContext(applicantContext);
    const [applicantDetails, setApplicantDetails] = useState<ApplicantDetails>({} as ApplicantDetails);

    const handleChangeApplicantDetails = useCallback((event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        if (name === "is_disabled") {
            setApplicantDetails(Object.assign({}, applicantDetails, { [name]: (value === "true") }));
        }
        else if (name === "min_expected_salary" || name === "min_duty_hours" || name === "experience_year") {
            setApplicantDetails(Object.assign({}, applicantDetails, { [name]: Number(value) }));
        }
        else setApplicantDetails(Object.assign({}, applicantDetails, { [name]: value }));
    }, [applicantDetails]);

    const handleUpdate = async () => {
        const response = await updateApplicantDetailsById(applicantloggedinDetails.applicantDetails._id!, applicantDetails);
        if (response?.status === 200) {
            applicantDispatch({ type: "updateDetails", payload: response?.data.data })
            hideModal("social_media_modal")
        }
    }
    return (
        <div id="social_media_modal" className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm hidden">
            <div className="relative w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-xl shadow ">
                    <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto
                         inline-flex justify-center items-center " data-modal-hide="authentication-modal"
                        onClick={() => { hideModal("social_media_modal") }}>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="px-6 py-6 lg:px-8">
                        <h3 className="mb-4 text-xl font-medium text-gray-900 ">Enter Your<span className="text-blue-600"> Social Media </span>Profiles</h3>
                        <div className="space-y-6">

                            <div className="mb-6">
                                <label htmlFor="facebook" className="block mb-2 text-sm font-medium text-gray-900 ">Facebook profile Link</label>
                                <input type="text" id="facebook" name="facebook_link" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                                    focus:border-blue-500 block w-full p-2.5" defaultValue={applicantloggedinDetails.applicantDetails.facebook_link || "https://www.facebook.com/"} onChange={e => handleChangeApplicantDetails(e)} />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="git" className="block mb-2 text-sm font-medium text-gray-900 ">Github Profile Link</label>
                                <input type="text" id="git" name="github_link" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                                    focus:border-blue-500 block w-full p-2.5" defaultValue={ applicantloggedinDetails.applicantDetails.github_link || "https://github.com/" } onChange={e => handleChangeApplicantDetails(e)}/>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="facebook" className="block mb-2 text-sm font-medium text-gray-900 ">Linkedin Profile Link</label>
                                <input type="text" id="facebook" name="linkedin_link" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                                    focus:border-blue-500 block w-full p-2.5" defaultValue={applicantloggedinDetails.applicantDetails.linkedin_link || "https://www.linkedin.com/"} onChange={e => handleChangeApplicantDetails(e)}/>
                            </div>

                            <button className="w-full inline-flex items-center justify-center
                                 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
                                font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={handleUpdate}>
                                Update
                                <svg className="w-4 h-4 ms-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.153 15 19 8l-4.847-7H1l4.848 7L1 15h13.153Z" />
                                </svg>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SocialMediaModal