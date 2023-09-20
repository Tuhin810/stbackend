import { useContext } from "react";
import { recruiterContext } from "../../../../context/recruiterDetails/RecruiterContext";
import { Link } from "react-router-dom";
import "./Sidebar.css"
const SideBar = () => {
    
    const { recruiterDetails } = useContext(recruiterContext).recruiterloggedinDetails;

    // const logout = () => {
    //     console.log('log out');
    //     localStorage.clear();
    //     dispatch({ type: "logout", payload: {} });
    //     navigate('/home');
    // }
    return (
        <div>
            {/* <aside id="logo-sidebar" className="hidden md:inline fixed top-0 left-0  w-72 h-screen overflow-y-scroll  pt-20  bg-slate-100 border-r-2 sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-3 pb-2 overflow-y-auto bg-transparent hideScrollbar">
                    <div className="profile mt-5">
                        <div className="flex flex-col items-center pb-10">
                            <div id="profile-photo" className="bg-orange-200 shadow-xl shadow-orange-100">
                                <img src="https://static.naukimg.com/s/0/0/i/ni-gnb-revamped/userdp.svg" id="output" width="200" />
                                <input type="hidden" name="profile-src-container" id="profile-src-container" value="" />
                                <a to="" id="change-image-button">Change image</a>
                            </div>

                            <h5 className="mb-1 text-xl font-medium text-black ">{recruiterDetails?.first_name} {recruiterDetails?.last_name}</h5>
                        </div>

                    </div>
                    <ul className="space-y-5 font-medium font-light monospace">
                        <li>
                            <Link to="/recruiter/jobs" className="flex items-center p-2 rounded-lg text-black hover:bg-gray-100 hover:text-black darkno:hover:bg-gray-700 group">
                                <svg className="w-6 h-6 text-blue-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="0.9" d="M1 10c1.5 1.5 5.25 3 9 3s7.5-1.5 9-3m-9-1h.01M2 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1ZM14 5V3a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2h8Z" />
                                </svg>
                                <span className="ml-3">Posted Jobs</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/recruiter/postjob" className="flex items-center p-2 text-black rounded-lg darkno:text-white hover:bg-gray-100 darkno:hover:bg-gray-700 group">
                                <svg className="w-6 h-6 text-blue-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.9" d="M10 5.757v8.486M5.757 10h8.486M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Post a New Job</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/recruiter/pricing" className="flex items-center p-2 text-black hover:bg-gray-100 hover:text-black rounded-lg darkno:text-white hover:bg-gray-100 darkno:hover:bg-gray-700 group">
                                <svg className="w-6 h-6 text-blue-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.9" d="m11.479 1.712 2.367 4.8a.532.532 0 0 0 .4.292l5.294.769a.534.534 0 0 1 .3.91l-3.83 3.735a.534.534 0 0 0-.154.473l.9 5.272a.535.535 0 0 1-.775.563l-4.734-2.49a.536.536 0 0 0-.5 0l-4.73 2.487a.534.534 0 0 1-.775-.563l.9-5.272a.534.534 0 0 0-.154-.473L2.158 8.48a.534.534 0 0 1 .3-.911l5.294-.77a.532.532 0 0 0 .4-.292l2.367-4.8a.534.534 0 0 1 .96.004Z" />
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Subscription</span>
                            </Link>
                        </li>
                        <li>
                            <a to="" className="flex items-center p-2 text-black hover:bg-gray-100 hover:text-black rounded-lg darkno:text-white hover:bg-gray-100 darkno:hover:bg-gray-700 group">
                                <svg className="w-6 h-6 text-blue-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.9" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" />
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Inbox</span>
                                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full darkno:bg-blue-900 darkno:text-blue-300">3</span>
                            </a>
                        </li>
                        <li>
                            <a to="" className="flex items-center p-2 text-black rounded-lg darkno:text-white hover:bg-gray-100 darkno:hover:bg-gray-700 group">
                                <svg className="w-6 h-6 text-blue-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.9" d="M7.529 7.988a2.502 2.502 0 0 1 5 .191A2.441 2.441 0 0 1 10 10.582V12m-.01 3.008H10M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">FAQ</span>
                            </a>
                        </li>
                        <li>
                            <Link to="/home" className="flex items-center p-2 text-black hover:bg-gray-100 hover:text-black rounded-lg darkno:text-white hover:bg-gray-100 darkno:hover:bg-gray-700 group" onClick={logout}>
                                <svg className="w-6 h-6 text-blue-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.9" d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3" />
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Sign Out</span>
                            </Link>
                        </li>

                    </ul>
                </div>
            </aside> */}


<aside className="hidden md:inline fixed top-0 left-0  w-72 h-screen mr-5 pt-20 bg-white border-r rtl:border-r-0 rtl:border-l dark-bg-gray-900 dark-border-gray-700" aria-label="Sidebar">
   

    <div className="flex flex-col items-center mt-6 ">
        <img className="object-cover w-24 h-24 mx-2 rounded-full" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="avatar"/>
        <h4 className="mx-2 mt-2 font-medium text-gray-800 dark-text-gray-200">{recruiterDetails?.first_name}&nbsp;{recruiterDetails?.last_name}</h4>
        <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark-text-gray-400">{recruiterDetails?.email}</p>
    </div>

    <div className="flex flex-col justify-between flex-1 mt-6 px-3">
        <nav>
            <Link to="/recruiter/jobs" className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg dark-bg-gray-800 dark-text-gray-200" >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="textgray-800" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>
      
                <span className="mx-4 font-medium">Post a new Job</span>  
                        
            </Link>

            <Link className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark-text-gray-400 hover:bg-gray-100 dark-hover:bg-gray-800 dark-hover:text-gray-200 hover:text-gray-700" 
             to="/recruiter/postjob">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <span className="mx-4 font-medium">Posted Jobs</span>
            </Link>

            <Link className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark-text-gray-400 hover:bg-gray-100 dark-hover:bg-gray-800 dark-hover:text-gray-200 hover:text-gray-700" 
            to="/recruiter/pricing">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <span className="mx-4 font-medium">Subscription</span>
            </Link>

            <Link className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark-text-gray-400 hover:bg-gray-100 dark-hover:bg-gray-800 dark-hover:text-gray-200 hover:text-gray-700" 
            to="">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <span className="mx-4 font-medium">Inbox</span>
            </Link>
            <Link className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark-text-gray-400 hover:bg-gray-100 dark-hover:bg-gray-800 dark-hover:text-gray-200 hover:text-gray-700" 
            to="">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <span className="mx-4 font-medium">FAQ</span>
            </Link>
        </nav>
    </div>
</aside>
        </div>
    )
}

export default SideBar
