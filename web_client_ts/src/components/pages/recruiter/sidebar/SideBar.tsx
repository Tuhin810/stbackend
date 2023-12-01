import { useContext } from "react";
import { recruiterContext } from "../../../../context/recruiterDetails/RecruiterContext";
import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.css"
import { SidebarProps } from "../../../../@types/interfaces/props/sideBarProps/SidebarProps";
import LogOutIcon from "../../../shared/icons/logoutIcon/LogOutIcon";
import { EMPLOYER_ROUTES } from "../../../../constants/employerNavRoutes";
// import LogOutIcon from "../../../shared/icons/logoutIcon/LogOutIcon";
const SideBar = ({ show }: SidebarProps) => {

    const { recruiterDetails } = useContext(recruiterContext).recruiterloggedinDetails;
    // const { subscription } = recruiterDetails;
    // const { company_details } = recruiterDetails;
    const { dispatch } = useContext(recruiterContext);
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        dispatch({ type: "logout", payload: {} });
        navigate('/home');
    }
    return (
        <div>
            {/* fixed w-full h-full ease-in-out duration-300 transform -translate-x-0 z-40 mt-1 */}
            <aside className={show ? "shadow-lg inline ease-in-out duration-300 transform -translate-x-0 z-40 mt-1 fixed top-0 left-0 w-72 h-screen mr-5 pt-20 bg-white border-r rtl:border-r-0 rtl:border-l dark-bg-gray-900 dark-border-gray-700" : "ease-in-out duration-300 transform -translate-x-full inline z-40 mt-1 fixed top-0 left-0 w-72 h-screen mr-5 pt-20 bg-white border-r rtl:border-r-0 rtl:border-l dark-bg-gray-900 dark-border-gray-700"} aria-label="Sidebar">
                <div className="flex flex-col items-center mt-6 ">
                    <img className="object-cover w-24 h-24 mx-2 rounded-full" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="avatar" />
                    <h4 className="mx-2 mt-2 font-medium text-gray-800 ">{recruiterDetails?.first_name}&nbsp;{recruiterDetails?.last_name}</h4>
                    <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark-text-gray-400">{recruiterDetails?.email}</p>
                </div>
                <div className="flex flex-col justify-between flex-1 mt-6 px-3">
                    <nav>
                        <Link to={EMPLOYER_ROUTES.postJob} className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg dark-bg-gray-800 dark-text-gray-200" >
                            <svg className="w-5 h-5 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 5.757v8.486M5.757 10h8.486M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <span className="mx-4 font-medium">Post a new Job</span>
                        </Link>
                        <Link to={EMPLOYER_ROUTES.postedJobsList} className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark-text-gray-400 hover:bg-gray-100 dark-hover:bg-gray-800 dark-hover:text-gray-200 hover:text-gray-700"
                        >
                            <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                <path d="M18 0H6a2 2 0 0 0-2 2h14v12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z" />
                                <path d="M14 4H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM2 16v-6h12v6H2Z" />
                            </svg>

                            <span className="mx-4 font-medium">Posted Jobs</span>
                        </Link>

                        <Link className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark-text-gray-400 hover:bg-gray-100 dark-hover:bg-gray-800 dark-hover:text-gray-200 hover:text-gray-700"
                            to={EMPLOYER_ROUTES.pricing}>
                            <svg className="w-5 h-5 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm1-4H5m0 0L3 4m0 0h5.501M3 4l-.792-3H1m11 3h6m-3 3V1" />
                            </svg>
                            <span className="mx-4 font-medium">Subscription</span>
                        </Link>

                        <Link className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark-text-gray-400 hover:bg-gray-100 dark-hover:bg-gray-800 dark-hover:text-gray-200 hover:text-gray-700"
                            to={EMPLOYER_ROUTES.chat}>
                            <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                            </svg>

                            <span className="mx-4 font-medium">Inbox</span>
                        </Link>
                        <Link className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark-text-gray-400 hover:bg-gray-100 dark-hover:bg-gray-800 dark-hover:text-gray-200 hover:text-gray-700"
                            to={EMPLOYER_ROUTES.faq}>
                            <svg className="w-5 h-5 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9h2v5m-2 0h4M9.408 5.5h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>

                            <span className="mx-4 font-medium">FAQ</span>
                        </Link>
                        <Link className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark-text-gray-400 hover:bg-gray-100 dark-hover:bg-gray-800 dark-hover:text-gray-200 hover:text-gray-700"
                            to="/home" onClick={logout}>
                            <LogOutIcon />
                            <span className="mx-4 font-medium">Log Out</span>
                        </Link>
                    </nav>
                </div>
            </aside>
        </div>
    )
}

export default SideBar
