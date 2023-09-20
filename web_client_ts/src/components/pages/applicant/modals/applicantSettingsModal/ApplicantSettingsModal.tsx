import { useContext, useState } from "react"
import { hideModal } from "../../../../../utils/commonFunctions/HandleModal"
import { applicantContext } from "../../../../../context/applicantDetails/ApplicantContext"
import { updateApplicantPrivacy } from "../../../../../utils/apis/applicant/Applicant";

const ApplicantSettingsModal = () => {
    const {applicantDetails} = useContext(applicantContext).applicantloggedinDetails;
    const [applicantProfilePrivacy,setApplicantProfilePrivacy]=useState<boolean>(applicantDetails.is_profile_public!);
    const [applicantResumePrivacy,setApplicantResumePrivacy]=useState<boolean>(applicantDetails.is_resume_public!);
    
    const applicantPrivacy={
        is_profile_public:applicantProfilePrivacy,
        is_resume_public:applicantResumePrivacy,
    }
    const handleSetProfilePrivacy = () =>{
       if(applicantProfilePrivacy){
        setApplicantProfilePrivacy(false);
       }
       else{
        setApplicantProfilePrivacy(true);
       }
    }
    const handleSetResumePrivacy = () =>{
        if(applicantResumePrivacy){
            setApplicantResumePrivacy(false);
           }
           else{
            setApplicantResumePrivacy(true);
           }
    }
    const updatePrivacy = async () => {
        const response = await updateApplicantPrivacy(applicantDetails._id!,applicantPrivacy);
        if(response?.status===200){
            hideModal("applicantSettings");
        }
    }
    return (
        <>
            <div id="applicantSettings" className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm hidden">
                <div className="relative w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg">
                        <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-xl text-sm w-8 h-8 ml-auto
                         inline-flex justify-center items-center darkno:hover:bg-gray-600 darkno:hover:text-white" data-modal-hide="authentication-modal" onClick={() => { hideModal("applicantSettings") }}>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="px-6 py-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-medium text-gray-900 darkno:text-white">Choose Your <span className="text-blue-600">Privacy</span></h3>

                            <div className="mb-2" >
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" checked={applicantProfilePrivacy} onChange={handleSetProfilePrivacy}/>
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                    <span className="ml-3 text-sm font-medium text-gray-900">Make My Profile Public</span>
                                </label>
                            </div>
                            <div className="mb-2" >
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer" checked={applicantResumePrivacy} onChange={handleSetResumePrivacy}/>
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                    <span className="ml-3 text-sm font-medium text-gray-900">Make My Resume Public</span>
                                </label>
                            </div>
                        <div className="text-right">
                            <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 shadow-xl shadow-orange-200" onClick={updatePrivacy}>Confirm</button>
                        </div>

                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default ApplicantSettingsModal