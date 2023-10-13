import { useState } from 'react'
import SharedResume from '../../common/ResumeShare.tsx/SharedResume'
import { showModal } from '../../../../utils/commonFunctions/HandleModal';
import MailIcon from '../../../shared/icons/mailIcon/MailIcon';
import CallIcon from '../../../shared/icons/callIcon/CallIcon';
import UserRemoveIcon from '../../../shared/icons/userRemoveIcon/UserRemoveIcon';
import UserPlusIcon from '../../../shared/icons/userPlusIcon/UserPlusIcon';

const ResumeView = () => {
    const [show, setShow] = useState<boolean>(false);
    // const [mailId,setMailId]=useState<string>("")
    // const [phone,setPhone]=useState<number>(0)
    const openOptions = () => {
        setShow(true);
    }
    const hideOptions = () => {
        setShow(false);
    }
    const handleShare = () => {
        showModal("applicantSettings");
    }
    // const mail = () =>{
    //     window.location='mailto:'
    // }

    return (
        <div>
            <SharedResume />
            <div className=''>
                <div className='fixed right-8 bottom-5'>
                    <div onMouseEnter={openOptions} onMouseLeave={hideOptions} className="fixed right-6 bottom-6 group">
                        {
                            (show) ?
                                <div id="speed-dial-menu-default" className="flex flex-col items-center mb-4 space-y-2">
                                    <button  type="button" onClick={handleShare} data-tooltip-target="tooltip-share" data-tooltip-placement="left" className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4
                                     focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
                                        <MailIcon/>
                                        <span className="sr-only">Mail</span>
                                    </button>
                                    <div id="tooltip-share" role="tooltip" className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                                        Mail
                                        <div className="tooltip-arrow" data-popper-arrow></div>
                                    </div>
                                    <button type="button" data-tooltip-target="tooltip-print" data-tooltip-placement="left" className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
                                        <CallIcon/>
                                        <span className="sr-only">Call</span>
                                    </button>
                                    <div id="tooltip-print" role="tooltip" className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                                        Call
                                        <div className="tooltip-arrow" data-popper-arrow></div>
                                    </div>
                                    <button type="button" data-tooltip-target="tooltip-download" data-tooltip-placement="left" className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
                                       <UserRemoveIcon/>
                                        <span className="sr-only">Download</span>
                                    </button>
                                    <div id="tooltip-download" role="tooltip" className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                                        Reject
                                        <div className="tooltip-arrow" data-popper-arrow></div>
                                    </div>
                                    <button type="button" data-tooltip-target="tooltip-download" data-tooltip-placement="left" className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
                                       <UserPlusIcon/>
                                        <span className="sr-only">Download</span>
                                    </button>
                                    <div id="tooltip-download" role="tooltip" className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
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
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResumeView