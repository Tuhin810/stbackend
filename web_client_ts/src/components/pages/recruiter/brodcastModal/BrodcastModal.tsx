import { useState } from "react";
import { IBrodcastJobProps } from "../../../../@types/interfaces/props/BrodcastJobProps.ts/BrodcastJobProps";
import { brodcastJob } from "../../../../utils/apis/Job/jobpost";
import Spinner from "../../../shared/spinner/Spinner";
import MatchedApplicantList from "../matchedApplicant/MatchedApplicantList";
import { hideModal } from "../../../../utils/commonFunctions/HandleModal";

const BrodcastModal = ({ jobId }: IBrodcastJobProps) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [fetched, setFetched] = useState<boolean>(false);
    const [applicantList, setApplicantList] = useState([]);
    const brodcast = async () => {
        setLoading(true);
        const response = await brodcastJob(jobId);
        setLoading(false);
        if (response?.status === 200) {
            setApplicantList(response?.data.data);
            setFetched(true);
        }
    }

    const closeModal = () =>{
        hideModal("brodcast");
        setFetched(false);
        setApplicantList([]);
    }
    
    return (
        <div>
            <div id="brodcast" className="fixed inset-0 z-50  items-center justify-center bg-black bg-opacity-50 hidden">
                <div className="relative w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow darkno:bg-gray-700">
                        <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex
                         justify-center items-center darkno:hover:bg-gray-600 darkno:hover:text-white" onClick={closeModal}>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        {
                            (fetched)?<MatchedApplicantList applicantList={applicantList}/>:
                            (loading)?<Spinner/>:
                            <div className="p-6 text-center">
                            <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 darkno:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <h3 className="mb-5 text-lg font-normal text-gray-500 darkno:text-gray-400">Are you sure you want to Brodcast this Job?</h3>
                            <button data-modal-hide="popup-modal" type="button" className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 darkno:focus:ring-blue-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2" onClick={brodcast}>
                                Yes, I'm sure
                            </button>
                            <button data-modal-hide="popup-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 darkno:bg-gray-700 darkno:text-gray-300 darkno:border-gray-500 darkno:hover:text-whit
                             darkno:hover:bg-gray-600 darkno:focus:ring-gray-600" onClick={()=>hideModal("brodcast")}>No, cancel</button>
                        </div>
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BrodcastModal;
