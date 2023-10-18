import { useContext, useEffect, useState } from "react"
import { hideModal } from "../../../../../utils/commonFunctions/HandleModal"
import { applicantContext } from "../../../../../context/applicantDetails/ApplicantContext"
import { getApplicantResumePrivacy, updateApplicantPrivacy } from "../../../../../utils/apis/applicant/Applicant";
import CopyIcons from "../../../../shared/icons/copyIcons/CopyIcons";

const ApplicantSettingsModal = () => {
    const { applicantDetails } = useContext(applicantContext).applicantloggedinDetails;
    const { applicantDispatch } = useContext(applicantContext);
    const resumeLink = window.location.host + '/resume/' + applicantDetails._id;
    const [resumeVisibilityStatus, setResumeVisibilityStatus] = useState(applicantDetails.resume_visibility_status);


    const handleChangeResumePrivacy = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target;
        setResumeVisibilityStatus(Number(value));
        localStorage.setItem("resumeVisibilityStatus", value); // Save to local storage
        updatePrivacy(Number(value));
    }


  
    const updatePrivacy = async (resumeVisibilty: number) => {
        await updateApplicantPrivacy(applicantDetails._id!, resumeVisibilty).then(response => {
            if (response?.status === 200) {
                applicantDispatch({ type: "updateDetails", payload: response?.data.data })
                   
            }
        }).catch(error => {
            console.log(error);
        })
    }

    const getPrivecy = async ()=>{
        await getApplicantResumePrivacy(applicantDetails._id!).then(response=>{
            if (response?.status === 200) {
                setResumeVisibilityStatus(response?.data.data.resume_visibilty_status)
                console.log("data",response?.data.data.resume_visibilty_status);
                
            }
        }).catch(error => {
            console.log(error);
        })
        }
    
    const copyLink = () => {
        navigator.clipboard.writeText(resumeLink);
    }

    useEffect(() => {
        getPrivecy()
    }, []);
    return (
        <>
            <div id="applicantSettings" className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm hidden">
                <div className="relative w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg">
                        <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-xl text-sm w-8 h-8 ml-auto
                         inline-flex justify-center items-center" data-modal-hide="authentication-modal" onClick={() => { hideModal("applicantSettings") }}>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="px-6 py-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-medium text-gray-900 ">My Resume <span className="text-blue-600">Link</span></h3>
                            <div className="mb-5">
                                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 ">Who Can See My Resume ?</label>
                                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                                value={resumeVisibilityStatus}  onChange={e => handleChangeResumePrivacy(e)}>
                                    <option selected={applicantDetails.resume_visibility_status === 0} value={0}>No One</option>
                                    <option selected={applicantDetails.resume_visibility_status === 1} value={1}>Only Employers</option>
                                    <option selected={applicantDetails.resume_visibility_status === 2} value={2}>Anyone With the Link</option>
                                </select>
                            </div>
                            <div className="flex flex-col mb-4 w-full">
                                <div className="relative w-full">
                                    <div className="absolute text-gray-600 flex items-center pl-4 h-full cursor-pointer" onClick={copyLink}>
                                        <CopyIcons />
                                    </div>
                                    <input id="link" className="text-gray-600  focus:outlin-none focus:border focus:border-indigo-700  bg-white font-normal w-full h-10 flex items-center pl-12 text-sm border-gray-300 rounded border shadow" disabled defaultValue={resumeLink} />
                                </div>
                            </div>
                            {/* <div className="text-right">
                                <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 shadow-xl shadow-orange-200" onClick={updatePrivacy}>Confirm</button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ApplicantSettingsModal