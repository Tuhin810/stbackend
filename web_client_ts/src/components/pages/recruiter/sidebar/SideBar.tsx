import { useContext } from "react";
import { recruiterContext } from "../../../../context/recruiterDetails/RecruiterContext";
import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.css"
const SideBar = () => {
    const { dispatch } = useContext(recruiterContext);
    const { recruiterDetails } = useContext(recruiterContext).recruiterloggedinDetails;
    const navigate = useNavigate();
    const logout = () => {
        console.log('log out');
        localStorage.clear();
        dispatch({ type: "logout", payload: {} });
        navigate('/home');
    }
    return (
        <div>
            <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-72 h-screen overflow-y-scroll  pt-20  bg-slate-100 border-r-2 sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-3 pb-2 overflow-y-auto bg-transparent hideScrollbar">
                    <div className="profile mt-5">
                        <div className="flex flex-col items-center pb-10">
                            <img className="w-32 h-32 mb-3 rounded-full border-4 border-gray-400 "
                                src="https://static.naukimg.com/s/0/0/i/ni-gnb-revamped/userdp.svg" alt="Bonnie image" />
                            <h5 className="mb-1 text-xl font-medium text-black ">{recruiterDetails?.first_name} {recruiterDetails?.last_name}</h5>
                        </div>
                    </div>
                    <ul className="space-y-5 font-medium font-light monospace">
                        <li>
                            <Link to="/recruiter/jobs" className="flex items-center p-2 rounded-lg text-black hover:bg-gray-100 hover:text-black darkno:hover:bg-gray-700 group">
                                <svg className="w-6 h-6 text-blue-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-width="0.9" d="M1 10c1.5 1.5 5.25 3 9 3s7.5-1.5 9-3m-9-1h.01M2 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1ZM14 5V3a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2h8Z" />
                                </svg>
                                <span className="ml-3">Posted Jobs</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/recruiter/postjob" className="flex items-center p-2 text-black rounded-lg darkno:text-white hover:bg-gray-100 darkno:hover:bg-gray-700 group">
                                <svg className="w-6 h-6 text-blue-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.9" d="M10 5.757v8.486M5.757 10h8.486M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Post a New Job</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/recruiter/pricing" className="flex items-center p-2 text-black hover:bg-gray-100 hover:text-black rounded-lg darkno:text-white hover:bg-gray-100 darkno:hover:bg-gray-700 group">
                                <svg className="w-6 h-6 text-blue-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.9" d="m11.479 1.712 2.367 4.8a.532.532 0 0 0 .4.292l5.294.769a.534.534 0 0 1 .3.91l-3.83 3.735a.534.534 0 0 0-.154.473l.9 5.272a.535.535 0 0 1-.775.563l-4.734-2.49a.536.536 0 0 0-.5 0l-4.73 2.487a.534.534 0 0 1-.775-.563l.9-5.272a.534.534 0 0 0-.154-.473L2.158 8.48a.534.534 0 0 1 .3-.911l5.294-.77a.532.532 0 0 0 .4-.292l2.367-4.8a.534.534 0 0 1 .96.004Z" />
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Subscription</span>
                            </Link>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-black hover:bg-gray-100 hover:text-black rounded-lg darkno:text-white hover:bg-gray-100 darkno:hover:bg-gray-700 group">
                                <svg className="w-6 h-6 text-blue-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.9" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" />
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Inbox</span>
                                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full darkno:bg-blue-900 darkno:text-blue-300">3</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-black rounded-lg darkno:text-white hover:bg-gray-100 darkno:hover:bg-gray-700 group">
                                <svg className="w-6 h-6 text-blue-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.9" d="M7.529 7.988a2.502 2.502 0 0 1 5 .191A2.441 2.441 0 0 1 10 10.582V12m-.01 3.008H10M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">FAQ</span>
                            </a>
                        </li>
                        <li>
                            <Link to="/home" className="flex items-center p-2 text-black hover:bg-gray-100 hover:text-black rounded-lg darkno:text-white hover:bg-gray-100 darkno:hover:bg-gray-700 group" onClick={logout}>
                                <svg className="w-6 h-6 text-blue-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.9" d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3" />
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Sign Out</span>
                            </Link>
                        </li>

                    </ul>
                </div>
            </aside>
        </div>
    )
}

export default SideBar
