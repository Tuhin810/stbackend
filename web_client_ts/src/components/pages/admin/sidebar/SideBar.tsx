import { Link } from "react-router-dom";
import { SidebarProps } from "../../../../@types/interfaces/props/sideBarProps/SidebarProps";
import LogOutIcon from "../../../shared/icons/logoutIcon/LogOutIcon";
const SideBar = ({show,logout}:SidebarProps) => {
    // const { recruiterDetails } = useContext(recruiterContext).recruiterloggedinDetails;
    return (
        <div>
            {/* fixed w-full h-full ease-in-out duration-300 transform -translate-x-0 z-40 mt-1 */}
            <aside className={show ? "inline ease-in-out duration-300 transform -translate-x-0 z-40 mt-1 fixed top-0 left-0 w-72 h-screen mr-5 pt-20 bg-white border-r rtl:border-r-0 rtl:border-l dark-bg-gray-900 dark-border-gray-700":"ease-in-out duration-300 transform -translate-x-full inline z-40 mt-1 fixed top-0 left-0 w-72 h-screen mr-5 pt-20 bg-white border-r rtl:border-r-0 rtl:border-l dark-bg-gray-900 dark-border-gray-700"} aria-label="Sidebar">
                <div className="flex flex-col items-center mt-6 ">
                    <img className="object-cover w-24 h-24 mx-2 rounded-full" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="avatar" />
                    {/* <h4 className="mx-2 mt-2 font-medium text-gray-800 dark-text-gray-200">{recruiterDetails?.first_name}&nbsp;{recruiterDetails?.last_name}</h4>
                    <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark-text-gray-400">{recruiterDetails?.email}</p> */}
                </div>
                <div className="flex flex-col justify-between flex-1 mt-6 px-3">
                    <nav>
                        <Link to="/employer/postjob" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg dark-bg-gray-800 dark-text-gray-200" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="textgray-800" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                            </svg>
                            <span className="mx-4 font-medium">Job Seekers</span>
                        </Link>
                        <Link className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark-text-gray-400 hover:bg-gray-100 dark-hover:bg-gray-800 dark-hover:text-gray-200 hover:text-gray-700"
                            to="/employer/jobs">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <span className="mx-4 font-medium">Companies</span>
                        </Link>

                        <Link className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark-text-gray-400 hover:bg-gray-100 dark-hover:bg-gray-800 dark-hover:text-gray-200 hover:text-gray-700"
                            to="/employer/jobs">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <span className="mx-4 font-medium">Employers</span>
                        </Link>

                        <Link className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark-text-gray-400 hover:bg-gray-100 dark-hover:bg-gray-800 dark-hover:text-gray-200 hover:text-gray-700"
                            to="/employer/pricing">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <span className="mx-4 font-medium">Jobs</span>
                        </Link>
                       
                        <Link className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark-text-gray-400 hover:bg-gray-100 dark-hover:bg-gray-800 dark-hover:text-gray-200 hover:text-gray-700"
                            to="/home" onClick={logout}>
                            <LogOutIcon/>
                            <span className="mx-4 font-medium">Log Out</span>
                        </Link>
                    </nav>
                </div>
            </aside>
        </div>
    )
}

export default SideBar
