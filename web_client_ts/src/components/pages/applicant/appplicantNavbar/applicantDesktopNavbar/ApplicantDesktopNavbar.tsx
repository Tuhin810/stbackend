import { Link } from 'react-router-dom'
import { logo } from '../../../../../assets/images'
import { IDesktopApplicantNavbarProps } from '../../../../../@types/interfaces/props/ApplicantProps/ApplicantNavbarProps'
import { showModal } from '../../../../../utils/commonFunctions/HandleModal'
import FourBoxIcon from '../../../../shared/icons/fourBoxIcon/FourBoxIcon'
import UserIcon from '../../../../shared/icons/userIcon/UserIcon'
import CompassIcon from '../../../../shared/icons/compassIcon/CompassIcon'
import QuestionIcon from '../../../../shared/icons/quetionIcon/QuestionIcon'
import LogOutIcon from '../../../../shared/icons/logoutIcon/LogOutIcon'
import SettingsIcon from '../../../../shared/icons/settingsIcons/SettingsIcon'
import { useContext } from 'react'
import { applicantContext } from '../../../../../context/applicantDetails/ApplicantContext'
import ThreeLines from '../../../../shared/icons/threeLines/ThreeLines'
import ChatIcon from '../../../../shared/icons/chatIcon/ChatIcon'

const ApplicantDesktopNavbar = ({ profile, setProfile, logout }: IDesktopApplicantNavbarProps) => {
    const {applicantDetails} = useContext(applicantContext).applicantloggedinDetails;
    return (
        <div>
            <nav className="w-full px-10 fixed z-30 top-0 bg-white hidden md:block drop-shadow-lg">
                <div className="py-7 px-6 h-20 flex justify-between items-center lg:items-stretch mx-auto">
                    <div className="flex items-center justify-around w-4/5">
                        <div className="mr-10">
                            <img src={logo} className="h-10" />
                        </div>
                        <ul className="flex items-center gap-5">
            <li className="p-4 border-b-2 focus:ring border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer active">
              <Link to="/jobSeeker/matchedJobs/" className='focus:text-blue-700 flex gap-1 items-center'><FourBoxIcon />Job Dashboard</Link>
            </li>
            <li className="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer">
            <Link to="/jobSeeker/profile" className='focus:text-blue-700 flex gap-1 items-center'><UserIcon />My Profile</Link>
         
            </li>
            <li className="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer">
            <Link to="/jobSeeker/performance" className='focus:text-blue-700 flex gap-1 items-center'><CompassIcon />Applied Jobs</Link>
         
            </li>
            <li className="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer">
            <Link to="/jobSeeker/inbox/" className='focus:text-blue-700 flex gap-1 items-center'><ChatIcon /> Inbox</Link>
         
            </li>
        </ul>
                        {/* <ul className="hidden md:flex items-center h-full">
                            <Link to="/jobSeeker/matchedJobs/">
                                <li className="cursor-pointer p-3 rounded-lg focus:bg-gray-100 hover:bg-gray-100 h-full flex items-center text-md font-medium hover:text-indigo-700 text-black mx-10 tracking-normal transition duration-150 ease-in-out">
                                    <span className="mr-2">
                                        <FourBoxIcon />
                                    </span>
                                    Job Dashboard
                                </li>
                            </Link>
                            <Link to="/jobSeeker/profile">
                                <div className="cursor-pointer  p-3 rounded-lg focus:bg-gray-100 hover:bg-gray-100 h-full flex items-center text-md font-medium hover:text-indigo-700 text-black mr-10 tracking-normal transition duration-150 ease-in-out">
                                    <span className="mr-2">
                                        <UserIcon />
                                    </span>
                                    My Profile
                                </div>
                            </Link>
                            <Link to="/jobSeeker/performance" className="cursor-pointer p-3 rounded-lg focus:bg-gray-100 hover:bg-gray-100 h-full flex items-center text-md font-medium hover:text-indigo-700 text-black mr-10 tracking-normal transition duration-150 ease-in-out">
                                <span className="mr-2">
                                    <CompassIcon />
                                </span>
                                Performance
                            </Link>
                            <li className="cursor-pointer p-3 rounded-lg focus:bg-gray-100 hover:bg-gray-100 h-full flex items-center text-md font-medium hover:text-indigo-700 text-black tracking-normal transition duration-150 ease-in-out">
                                <QuestionIcon />
                                Fraud
                            </li>
                        </ul> */}
                    </div>
                    <div className="h-full hidden xl:flex items-center justify-end">
                        <div className="h-full flex">
                            <div className="flex items-center pl-8 relative cursor-pointer" onClick={() => setProfile(!profile)}>
                                {profile && (
                                    <ul className="p-2  border-t-2 bg-white absolute rounded -left-20 drop-shadow-xl  mt-10 top-0 ">
                                        <li>
                                            <a href="#" className="flex w-56 items-center py-3 px-2 mt-1 
                                        text-sm text-gray-600 transition-colors  duration-300 transform bg-gray-50  hover:bg-gray-100 rounded-md">
                                                <img className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
                                                    src={applicantDetails.photo!.toString()} alt="jane avatar" />
                                                <div className="mx-1">
                                                    <h1 className="text-sm font-semibold text-gray-700 dark-text-gray-200">{applicantDetails.first_name} {applicantDetails.last_name}</h1>
                                                    <p className="text-sm text-gray-500 dark-text-gray-400">{applicantDetails.country_code} {applicantDetails.phone}</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <div className="px-10 border-2 w-full my-2"></div>
                                        </li>
                                        <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                            <div className="flex items-center">
                                                <UserIcon />
                                                <span className="ml-2">My Profile</span>
                                            </div>
                                        </li>
                                        <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center">
                                            <QuestionIcon />
                                            <span className="ml-2">Help Center</span>
                                        </li>
                                        <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center" onClick={() => showModal("applicantSettings")}>
                                            <SettingsIcon />
                                            <span className="ml-2">Settings</span>
                                        </li>
                                        <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center" onClick={logout}>
                                            <LogOutIcon />
                                            <span className="ml-2">Log Out</span>
                                        </li>
                                    </ul>
                                )}
                                <div className="px-2  border h-10 rounded-full flex items-center gap-2 hover:bg-gray-50">
                                    <img className="rounded-full h-8 w-8 object-cover  "
                                        src={applicantDetails.photo!.toString()} alt="logo" />
                                        <ThreeLines/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            
        </div>
    )
}

export default ApplicantDesktopNavbar
