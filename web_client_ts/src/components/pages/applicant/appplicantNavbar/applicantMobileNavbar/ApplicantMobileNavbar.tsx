import { useContext } from "react"
import { IMobileApplicantNavbarProps } from "../../../../../@types/interfaces/props/ApplicantProps/ApplicantNavbarProps"
import { logo } from "../../../../../assets/images"
import { applicantContext } from "../../../../../context/applicantDetails/ApplicantContext"
import FourBoxIcon from "../../../../shared/icons/fourBoxIcon/FourBoxIcon"
import UserIcon from "../../../../shared/icons/userIcon/UserIcon"
import CompassIcon from "../../../../shared/icons/compassIcon/CompassIcon"
import QuestionIcon from "../../../../shared/icons/quetionIcon/QuestionIcon"
import LogOutIcon from "../../../../shared/icons/logoutIcon/LogOutIcon"
import SettingsIcon from "../../../../shared/icons/settingsIcons/SettingsIcon"
import { Link } from "react-router-dom"
import { showModal } from "../../../../../utils/commonFunctions/HandleModal"

const ApplicantMobileNavbar = ({ show, setShow,logout }: IMobileApplicantNavbarProps) => {
    const {applicantDetails} = useContext(applicantContext).applicantloggedinDetails;
    return (
        <div>
            <nav>
                <div className="py-4 px-6 w-full flex md:hidden justify-between items-center bg-gray-100 fixed top-0 z-40 shadow-lg">
                    <div className="mr-10">
                        <img src={logo} className="h-9" />
                    </div>
                    <div>
                        <div id="menu" className="text-black" onClick={() => setShow(!show)}>
                            {show ? (
                                 <div id="cross" className="text-black" onClick={() => setShow(!show)}>
                                 <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                     <path stroke="none" d="M0 0h24v24H0z" />
                                     <line x1={18} y1={6} x2={6} y2={18} />
                                     <line x1={6} y1={6} x2={18} y2={18} />
                                 </svg>
                             </div>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <line x1={4} y1={6} x2={20} y2={6} />
                                    <line x1={4} y1={12} x2={20} y2={12} />
                                    <line x1={4} y1={18} x2={20} y2={18} />
                                </svg>
                            )}
                        </div>
                    </div>
                </div>
                {/*Mobile responsive sidebar*/}
                <div className={show ? "fixed w-full h-full ease-in-out duration-300 transform -translate-x-0 z-40 mt-1" : "fixed w-full h-full ease-in-out duration-300 transform -translate-x-full z-40 mt-1"} id="mobile-nav">
                    <div className="bg-transparent w-full h-full" onClick={() => setShow(!show)} />
                    <div className="w-64 z-40 fixed overflow-y-auto z-40 top-0 shadow shadow-xl h-full bg-white flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out">
                        <div className="px-6 h-full">
                            <div className="flex flex-col justify-between h-full w-full">
                                <div>
                                    <div className="mt-6 flex w-full items-center justify-between">
                                        <div className="flex items-center w-full">
                                            <div id="profileImage" className="me-5">
                                                <img src={applicantDetails.photo?.toString()} className="w-12 h-12 rounded-full " />
                                            </div>
                                           <div className="profileName">
                                                <p className="font-light">{applicantDetails.first_name} {applicantDetails.last_name}</p>
                                                <p className="font-extralight text-sm">{applicantDetails.country_code} {applicantDetails.phone}</p>
                                           </div>
                                        </div>
                                    </div>
                                    <ul className="font-extralight">
                                        <Link className="cursor-pointer" to="/jobSeeker/matchedJobs/" onClick={() => setShow(!show)}>
                                            <li className=" pt-10">
                                                <div className="flex items-center">
                                                    <div className="w-6 h-6 md:w-8 md:h-8 text-indigo-700">
                                                       <FourBoxIcon/>
                                                    </div>
                                                    <p className="text-indigo-700 xl:text-base text-base ml-3">Job Dashboard</p>
                                                </div>
                                            </li>
                                        </Link>
                                        <Link className="cursor-pointer" to="/jobSeeker/profile" onClick={() => setShow(!show)}>
                                            <li className=" pt-10">
                                                <div className="flex items-center">
                                                    <div className="w-6 h-6 md:w-8 md:h-8 text-black">
                                                        <UserIcon/>
                                                    </div>
                                                    <p className="text-black xl:text-base text-base ml-3">My Profile</p>
                                                </div>
                                            </li>
                                        </Link>
                                        <Link className="cursor-pointer" to="/" onClick={() => setShow(!show)}>
                                            <li className="text-black pt-8">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <div className="w-6 h-6 md:w-8 md:h-8 text-black">
                                                            <CompassIcon/>
                                                        </div>
                                                        <p className="text-black xl:text-base  text-base ml-3">Perfomance</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </Link>
                                        <Link className="cursor-pointer" to="/" onClick={() => setShow(!show)}>
                                            <li className="text-black pt-8">
                                                <div className="flex items-center">
                                                    <div className="w-6 h-6 md:w-8 md:h-8 text-black">
                                                       <QuestionIcon/> 
                                                    </div>
                                                    <p className="text-black xl:text-base  text-base ml-3">Fraud</p>
                                                </div>
                                            </li>
                                        </Link>
                                        <a className="cursor-pointer" onClick={() => showModal("applicantSettings")}>
                                            <li className="text-black pt-8">
                                                <div className="flex items-center">
                                                    <div className="w-6 h-6 md:w-8 md:h-8 text-black">
                                                       <SettingsIcon/> 
                                                    </div>
                                                    <p className="text-black xl:text-base  text-base ml-3">Account Privacy</p>
                                                </div>
                                            </li>
                                        </a>
                                        <a className="cursor-pointer" onClick={logout}>
                                            <li className="text-black pt-8">
                                                <div className="flex items-center">
                                                    <div className="w-6 h-6 md:w-8 md:h-8 text-black">
                                                       <LogOutIcon/> 
                                                    </div>
                                                    <p className="text-black xl:text-base  text-base ml-3">Log Out</p>
                                                </div>
                                            </li>
                                        </a>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default ApplicantMobileNavbar