import { useCallback, useEffect, useState } from 'react'
import SharedResume from '../../common/ResumeShare.tsx/SharedResume'
// import { showModal } from '../../../../utils/commonFunctions/HandleModal';
import MailIcon from '../../../shared/icons/mailIcon/MailIcon';
// import CallIcon from '../../../shared/icons/callIcon/CallIcon';
import UserRemoveIcon from '../../../shared/icons/userRemoveIcon/UserRemoveIcon';
import UserPlusIcon from '../../../shared/icons/userPlusIcon/UserPlusIcon';
import { useParams } from 'react-router-dom';
import { getMatchedApplicantStatus, getMatchedJobDetails } from '../../../../utils/apis/Job/jobpost';
import { MatchedApplicant } from '../../../../@types/interfaces/models/MatchedApplicant';
import { useNavigate } from "react-router-dom";

// import CommonModal from '../../../shared/modal/CommonModal';
// import { yes_no } from '../../../../assets/images';

import "./ResumeView.css"
const ResumeView = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [, setShow] = useState<boolean>(false);
    const [, setMessage] = useState<string>("");
    const [status, setStatus] = useState("")
    const [jobDetails, setJobDetails] = useState<MatchedApplicant>({
        jobId: "",
        applicantId: "",
        accept: false,
        status: "matched"
    });


    const getJobApplicantRelation = useCallback(async (applicantId: string) => {
        const jobId = params.jobId!;
        const response = await getMatchedJobDetails(jobId, applicantId);
        if (response?.status === 200) {
            setJobDetails(response?.data.data);
            console.log("matched",response?.data.data.status);
            setStatus(response?.data.data.status)
            
        }
    }, [params.jobId]);

    const openOptions = () => {
        setShow(true);
    }
    const hideOptions = () => {
        setShow(false);
    }
  
    const handleseStatus = async(status:string) => {
        setMessage("Are You Sure to Hire This Candidate ?")
        // showModal("selectionModal");
        getMatchedApplicantStatus(jobDetails.jobId, status)
        console.log(status);
       
        await alert(`this resume is ${status}`)
         navigate("/recruiter/jobs");
    }

    useEffect(() => {
        const applicantId = params.id!;
        getJobApplicantRelation(applicantId);
    }, [])

    return (
        <div>
            <SharedResume jobApplied={jobDetails.accept} />
            <div className=''>

                <div className="floating-container">
                    <div className="floating-button">+
                    </div>
                    <div className="element-container">
                        
                        <span className={`float-element items-center justify-center flex`}>
                            <button disabled={status==="rejected"}  className='m-auto mt-3'><MailIcon /></button>

                        </span>
                        <span className="float-element items-center justify-center flex">
                            <button disabled={status!=="matched"}  onClick={()=>handleseStatus("rejected")} className='m-auto mt-3'><UserRemoveIcon /></button>

                        </span>
                        <span className="float-element items-center justify-center flex">
                            <button disabled={status!=="matched"} onClick={()=>handleseStatus("hired")} className='m-auto mt-3'><UserPlusIcon /></button>

                        </span>
                    </div>
                </div>
                <div className='fixed right-8 bottom-5'>
                    <div onMouseEnter={openOptions} onMouseLeave={hideOptions} className="fixed right-6 bottom-6 group">
                        {/* {
                            (show) ?
                                <div id="speed-dial-menu-default" className="flex flex-col items-center mb-4 space-y-2">
                                    <button type="button" disabled={!jobDetails.accept} onClick={handleShare} data-tooltip-target="tooltip-share" data-tooltip-placement="left" className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-gray-800 rounded-full border border-gray-200 shadow-sm hover:bg-gray-600 focus:ring-4
                                     focus:ring-gray-300 focus:outline-none">
                                        <MailIcon />
                                        <span className="sr-only">Mail</span>
                                    </button>
                                    <div id="tooltip-share" role="tooltip" className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip ">
                                        Mail
                                        <div className="tooltip-arrow" data-popper-arrow></div>
                                    </div>
                                    <button type="button" disabled={!jobDetails.accept} data-tooltip-target="tooltip-print" data-tooltip-placement="left" className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-gray-800 rounded-full border border-gray-200 shadow-sm hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none ">
                                        <CallIcon />
                                        <span className="sr-only">Call</span>
                                    </button>
                                    <div id="tooltip-print" role="tooltip" className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip ">
                                        Call
                                        <div className="tooltip-arrow" data-popper-arrow></div>
                                    </div>
                                    <button title='reject' onClick={()=>getMatchedApplicantStatus(jobDetails.jobId,"rejected")} type="button" data-tooltip-target="tooltip-download" data-tooltip-placement="left" className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-gray-800 rounded-full border border-gray-200  shadow-sm ">
                                        <UserRemoveIcon />
                                        <span className="sr-only">reject</span>
                                    </button>
                                    <div  id="tooltip-download" role="tooltip" className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip ">
                                        Reject
                                        <div className="tooltip-arrow" data-popper-arrow></div>
                                    </div>
                                    <button type="button" title='hire' onClick={handleHire} data-tooltip-target="tooltip-download" data-tooltip-placement="left" className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-green-600 bg-green-500 rounded-full border border-gray-200  shadow-sm ">
                                        <UserPlusIcon />
                                        <span className="sr-only">Hire</span>
                                    </button>
                                    <div id="tooltip-download" role="tooltip" className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip ">
                                        Hire
                                        <div className="tooltip-arrow" data-popper-arrow></div>
                                    </div>

                                </div>
                                :
                                null
                        }

                        <button type="button" aria-controls="speed-dial-menu-default" aria-expanded="false" className="flex items-center justify-center text-white bg-indigo-700 rounded-full w-14 h-14 hover:bg-indigo-800 focus:ring-4 focus:ring-blue-300 focus:outline-none ">
                            <svg className="w-5 h-5 transition-transform group-hover:rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                            </svg>
                            <span className="sr-only">Open actions menu</span>
                        </button> */}
                    </div>
                </div>
            </div>
            {/* <CommonModal leftButtonLink={`/recruiter/`} leftRoute={true} leftButtonText='Yes,Sure!' rightButtonLink={``} rightRoute={true} rightButtontext='No,Thanks' message={message} id={"selectionModal"} Img={yes_no} /> */}
        </div>
    )
}

export default ResumeView