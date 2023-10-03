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

    const closeModal = () => {
        hideModal("brodcast");
        setFetched(false);
        setApplicantList([]);
    }

    return (
        <div>

            <div id="brodcast" className="min-w-screen h-screen hidden px-4 md:px-0 animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-coverfixed  bg-black bg-opacity-50 ">
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
                            (fetched) ? <MatchedApplicantList applicantList={applicantList} /> :
                                (loading) ? <div className="flex justify-center"><Spinner /></div> :
                                    <div className="p-6 text-center">
                                        <img className="mx-auto" src="https://img.icons8.com/?size=96&id=y90AvUi7gdGS&format=png" alt="" />
                                        <h2 className="text-xl font-bold py-4 ">Are you sure?</h2>
                                        <h3 className="mb-5 text-lg font-normal text-gray-500 darkno:text-gray-400">Are you sure you want to Brodcast this Job?</h3>
                                        <button
                                            onClick={brodcast} className="mb-2 mr-5 md:mb-0 bg-blue-500 border
             border-blue-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-blue-600">
                                            Yes, I'm sure
                                        </button>
                                        <button onClick={() => hideModal("brodcast")} className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                                            No,  Cancel it
                                        </button>
                                    </div>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BrodcastModal;
