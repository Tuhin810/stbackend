import { useContext, useRef, useState } from 'react';
import { applicantContext } from '../../../../context/applicantDetails/ApplicantContext';
import './ApplicantResume.css';
import Resume from '../../../shared/resume/Resume';
import { useReactToPrint } from 'react-to-print';
import { showModal } from '../../../../utils/commonFunctions/HandleModal';
import ApplicantSettingsModal from '../modals/applicantSettingsModal/ApplicantSettingsModal';
import ProfileCard from '../profile_card/ProfileCard';
import FourBoxIcon from '../../../shared/icons/fourBoxIcon/FourBoxIcon';
import ResumeIcons from '../../../shared/icons/resumeIcons/ResumeIcons';
const ApplicantResume = () => {
    const { applicantloggedinDetails } = useContext(applicantContext);
    const { applicantDetails } = applicantloggedinDetails;
    const componentRef = useRef(null);
    const cardRef = useRef(null);
    const [show, setShow] = useState<boolean>(false);

    const openOptions = () => {
        setShow(true);
    }
    const hideOptions = () => {
        setShow(false);
    }
    const handleShare = ()=>{
        showModal("applicantSettings");
    }

    const handlePrintResume = useReactToPrint({
        content: () => componentRef.current
    });
    const handlePrintCard = useReactToPrint({
        content: () => cardRef.current
    });

    return (
        <div>
            <div className="flex justify-center mt-16" id='resume'>
                <div className="w-full md:w-1/2">
                    <Resume defaultApplicantDetails={applicantDetails} componentRef={componentRef} />
                </div>
            </div>
            <div className='fixed right-8 bottom-5'>
                <div onMouseEnter={openOptions} onMouseLeave={hideOptions} className="fixed right-6 bottom-6 group">
                    {
                        (show) ?
                            <div id="speed-dial-menu-default" className="flex flex-col items-center mb-4 space-y-2">
                                <button type="button" onClick={handleShare} data-tooltip-target="tooltip-share" data-tooltip-placement="left" className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
                                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                        <path d="M14.419 10.581a3.564 3.564 0 0 0-2.574 1.1l-4.756-2.49a3.54 3.54 0 0 0 .072-.71 3.55 3.55 0 0 0-.043-.428L11.67 6.1a3.56 3.56 0 1 0-.831-2.265c.006.143.02.286.043.428L6.33 6.218a3.573 3.573 0 1 0-.175 4.743l4.756 2.491a3.58 3.58 0 1 0 3.508-2.871Z" />
                                    </svg>
                                    <span className="sr-only">Share</span>
                                </button>
                                <div id="tooltip-share" role="tooltip" className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                                    Share
                                    <div className="tooltip-arrow" data-popper-arrow></div>
                                </div>
                                <button type="button"  onClick={handlePrintResume} data-tooltip-target="tooltip-print" data-tooltip-placement="left" className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
                                    <ResumeIcons/>
                                    <span className="sr-only">Print</span>
                                </button>
                                <div id="tooltip-print" role="tooltip" className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                                    Print
                                    <div className="tooltip-arrow" data-popper-arrow></div>
                                </div>
                                <button onClick={handlePrintCard} type="button" data-tooltip-target="tooltip-download" data-tooltip-placement="left" className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
                                    <FourBoxIcon/>
                                    <span className="sr-only">Card</span>
                                </button>
                                <div id="tooltip-download" role="tooltip" className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                                    Download
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
                    </button>
                </div>
            </div>
            <ApplicantSettingsModal/>
            <div className='hidden'>
                <ProfileCard componentRef={cardRef}/>
            </div>
        </div>
    )
}

export default ApplicantResume
