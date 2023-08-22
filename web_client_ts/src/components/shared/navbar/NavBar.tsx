import React,{useState} from "react";
import { Link } from "react-router-dom"

function NavBar() {
	const [show, setshow] = useState(false);
  return (
    <div className="fixed top-0 z-10 bg-gray-50 w-full">
    <div className="bg-white shadow-md">
            <div className="2xl:container 2xl:mx-auto  lg:px-7 sm:px-6 py-2 md:py-5 px-4">
                <nav>
                    <div className=" flex flex-row justify-between">
                        <div className=" flex space-x-3 items-center">
                           <img className="h-9 w-36" src="https://starmark.vercel.app/assets/logo-e2e14c98.png" alt="" />
                             </div>
                        {/* For large (i.e. desktop and laptop sized screen) */}
                        
                        <div className="lg:flex hidden flex-auto justify-between flex-row">
                            <div className=" xl:pl-16 lg:pl-4">
                                <div className=" flex space-x-1 items-center">
                                    <div className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer w-3 h-3 rounded-full bg-gray-200 flex justify-center items-center">
                                        <svg width={4} height={6} viewBox="0 0 4 6" fill="none" className="" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.8999 1.20001L1.0999 3.00001L2.8999 4.80001" stroke="#1F2937" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <a className="focus:text-gray-700 hover:text-gray-700 duration-100 border-b border-gray-600 font-normal text-xs leading-3 text-gray-600 pb-1" 
                                    href="/recruiter/dashboard">Back to Dashboard</a>
                                </div>
                                <h2 className=" font-bold text-xl leading-5 text-gray-800">User Onboarding</h2>
                            </div>
                            <div className="flex flex-row lg:space-x-3 xl:space-x-4">
                                
                                <Link to="/" className="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-gray-800 bg-white focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
</svg>
                                    <p className="text-base">Home</p>
       
                                </Link>
								<button className="rounded-md flex space-x-2 w-28 h-10 font-normal text-sm leading-3 text-gray-800 bg-white focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>
<p className="text-base">About Us</p>
                                   
                                </button>
								<button className="rounded-md flex space-x-2 w-28 h-10 font-normal text-sm leading-3 text-gray-800 bg-white focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
<p className="text-base">Find Jobs</p>
                                    
                                </button>
								
								<button className="rounded-md flex space-x-2 w-28 h-10 font-normal text-sm leading-3 text-gray-800 bg-white focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-buildings" viewBox="0 0 16 16">
  <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022ZM6 8.694 1 10.36V15h5V8.694ZM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15Z"/>
  <path d="M2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-2 2h1v1H2v-1Zm2 0h1v1H4v-1Zm4-4h1v1H8V9Zm2 0h1v1h-1V9Zm-2 2h1v1H8v-1Zm2 0h1v1h-1v-1Zm2-2h1v1h-1V9Zm0 2h1v1h-1v-1ZM8 7h1v1H8V7Zm2 0h1v1h-1V7Zm2 0h1v1h-1V7ZM8 5h1v1H8V5Zm2 0h1v1h-1V5Zm2 0h1v1h-1V5Zm0-2h1v1h-1V3Z"/>
</svg>
                                    <p className="text-base">Companies</p>
                                  
                                </button>
								

                                {/* Vertical Line */}
                                <div className=" h-full w-0 border-l border-gray-300" />
                            </div>
                        </div>
                        <div className=" hidden sm:flex xl:pl-4 lg:pl-3 justify-end flex-row sm:space-x-4 md:space-x-6 lg:space-x-3 xl:space-x-4">
                            
                            <Link to="/userType" className="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-gray-800 bg-white focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-plus-fill" viewBox="0 0 16 16">
  <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
  <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
</svg> <p>Sig Up</p>
                               
                            </Link>
                            {/* Save button */}
                            <Link to="/users/login" className="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-white  justify-center items-center">
                            <a href="#_" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-blue-500 rounded-md group">
<span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-blue-700 rounded group-hover:-mr-4 group-hover:-mt-4">
<span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
</span>
<span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-blue-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
<span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Sign In</span>
</a>
                                
                            </Link>
                        </div>
                        {/* Burger Icon */}
                        <div id="bgIcon" onClick={()=>setshow(!show)} className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  block sm:hidden cursor-pointer">
                            <svg className={`${show ? 'hidden' : ''}`} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className=" transform duration-150" d="M4 6H20" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4 12H20" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path className=" transform duration-150" d="M4 18H20" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <svg className={`${show ? 'block' : 'hidden'}`} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6 6L18 18" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                    {/* for medium-sized devices */}
                    <div className="lg:hidden flex flex-auto justify-between flex-row mt-4">
                        <div id="heading" className={`${show ? 'hidden' : 'block'} sm:block xl:pl-16 lg:pl-4`}>
                            <div className=" flex space-x-1 items-center">
                                <div className="cursor-pointer w-3 h-3 rounded-full bg-gray-200 flex justify-center items-center">
                                    <svg width={4} height={6} viewBox="0 0 4 6" fill="none" className="bg-gray-200" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.8999 1.20001L1.0999 3.00001L2.8999 4.80001" stroke="#1F2937" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <a className="focus:outline-none focus:text-gray-700 hover:text-gray-700 duration-100 border-b border-gray-600 font-normal text-xs leading-3 text-gray-600 pb-1" href="javascript:void(0)">Back to Dashboard</a>
                            </div>
                            <h2 className=" font-bold text-xl leading-5 text-gray-800">User Onboarding</h2>
                        </div>
                        <div className="hidden sm:flex flex-row space-x-6 ">
                        <div className="inline-block mb-6 rounded-full bg-gray-300 pr-5 h-16 line-height-username1">
    	<img className="rounded-full float-left h-full" src="https://randomuser.me/api/portraits/women/34.jpg"/> <span className="ml-3">Kate Horwitz</span>
	</div>
  
  	<div></div>
                            <button className="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-gray-800 bg-white focus:outline focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center">
                                <p>Home</p>
                                <svg className="mt-1" width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5 4.66669C11.4665 4.66669 12.25 3.88319 12.25 2.91669C12.25 1.95019 11.4665 1.16669 10.5 1.16669C9.5335 1.16669 8.75 1.95019 8.75 2.91669C8.75 3.88319 9.5335 4.66669 10.5 4.66669Z" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M3.5 8.75C4.4665 8.75 5.25 7.9665 5.25 7C5.25 6.0335 4.4665 5.25 3.5 5.25C2.5335 5.25 1.75 6.0335 1.75 7C1.75 7.9665 2.5335 8.75 3.5 8.75Z" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10.5 12.8333C11.4665 12.8333 12.25 12.0498 12.25 11.0833C12.25 10.1168 11.4665 9.33331 10.5 9.33331C9.5335 9.33331 8.75 10.1168 8.75 11.0833C8.75 12.0498 9.5335 12.8333 10.5 12.8333Z" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M5.01074 7.88086L8.99491 10.2025" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8.98908 3.79749L5.01074 6.11915" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    {/* Mobile and Small devices Navigation */}
                    <div id="MobileNavigation" className={`${show ? 'block' : 'hidden'} transform duration-150 sm:hidden mt-4`}>
                        <hr className=" w-full bg-gray-300" />
                        <div className="flex flex-col gap-4 mt-4 max-w-sm mx-auto ">
                            <div className=" flex justify-center items-center -space-x-3 flex-row">
                  profile       </div>
                            <button className=" rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-gray-800 bg-white focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center">
                                <p>Share</p>
                                <svg className="mt-1" width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5 4.66669C11.4665 4.66669 12.25 3.88319 12.25 2.91669C12.25 1.95019 11.4665 1.16669 10.5 1.16669C9.5335 1.16669 8.75 1.95019 8.75 2.91669C8.75 3.88319 9.5335 4.66669 10.5 4.66669Z" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M3.5 8.75C4.4665 8.75 5.25 7.9665 5.25 7C5.25 6.0335 4.4665 5.25 3.5 5.25C2.5335 5.25 1.75 6.0335 1.75 7C1.75 7.9665 2.5335 8.75 3.5 8.75Z" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10.5 12.8333C11.4665 12.8333 12.25 12.0498 12.25 11.0833C12.25 10.1168 11.4665 9.33331 10.5 9.33331C9.5335 9.33331 8.75 10.1168 8.75 11.0833C8.75 12.0498 9.5335 12.8333 10.5 12.8333Z" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M5.01074 7.88086L8.99491 10.2025" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8.98908 3.79749L5.01074 6.11915" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <hr className=" w-full bg-gray-300" />
                            <button className="rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-gray-800 bg-white focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center">
                                <p>Home</p>
                                <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.583496 6.99998C0.583496 6.99998 2.91683 2.33331 7.00016 2.33331C11.0835 2.33331 13.4168 6.99998 13.4168 6.99998C13.4168 6.99998 11.0835 11.6666 7.00016 11.6666C2.91683 11.6666 0.583496 6.99998 0.583496 6.99998Z" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7 8.75C7.9665 8.75 8.75 7.9665 8.75 7C8.75 6.0335 7.9665 5.25 7 5.25C6.0335 5.25 5.25 6.0335 5.25 7C5.25 7.9665 6.0335 8.75 7 8.75Z" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <button className="rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-gray-800 bg-white focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center">
                                <p>About Us</p>
                                <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.25 8.75V11.0833C12.25 11.3928 12.1271 11.6895 11.9083 11.9083C11.6895 12.1271 11.3928 12.25 11.0833 12.25H2.91667C2.60725 12.25 2.3105 12.1271 2.09171 11.9083C1.87292 11.6895 1.75 11.3928 1.75 11.0833V8.75" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9.91683 4.66667L7.00016 1.75L4.0835 4.66667" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7 1.75V8.75" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
							<button className="rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-gray-800 bg-white focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center">
                                <p>Find Job</p>
                                <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.25 8.75V11.0833C12.25 11.3928 12.1271 11.6895 11.9083 11.9083C11.6895 12.1271 11.3928 12.25 11.0833 12.25H2.91667C2.60725 12.25 2.3105 12.1271 2.09171 11.9083C1.87292 11.6895 1.75 11.3928 1.75 11.0833V8.75" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9.91683 4.66667L7.00016 1.75L4.0835 4.66667" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7 1.75V8.75" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
							<button className="rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-gray-800 bg-white focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center">
                                <p>Companies</p>
                                <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.25 8.75V11.0833C12.25 11.3928 12.1271 11.6895 11.9083 11.9083C11.6895 12.1271 11.3928 12.25 11.0833 12.25H2.91667C2.60725 12.25 2.3105 12.1271 2.09171 11.9083C1.87292 11.6895 1.75 11.3928 1.75 11.0833V8.75" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9.91683 4.66667L7.00016 1.75L4.0835 4.66667" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7 1.75V8.75" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
							<button className="rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-gray-800 bg-white focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center">
                                <p>Help</p>
                                <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.25 8.75V11.0833C12.25 11.3928 12.1271 11.6895 11.9083 11.9083C11.6895 12.1271 11.3928 12.25 11.0833 12.25H2.91667C2.60725 12.25 2.3105 12.1271 2.09171 11.9083C1.87292 11.6895 1.75 11.3928 1.75 11.0833V8.75" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9.91683 4.66667L7.00016 1.75L4.0835 4.66667" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7 1.75V8.75" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            {/* Save button */}
                            <button className="rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-white bg-indigo-700 focus:outline-none focus:bg-indigo-600 hover:bg-indigo-600 duration-150 justify-center items-center">
                                <p>Sign Up</p>
                                <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.0833 12.25H2.91667C2.60725 12.25 2.3105 12.1271 2.09171 11.9083C1.87292 11.6895 1.75 11.3928 1.75 11.0833V2.91667C1.75 2.60725 1.87292 2.3105 2.09171 2.09171C2.3105 1.87292 2.60725 1.75 2.91667 1.75H9.33333L12.25 4.66667V11.0833C12.25 11.3928 12.1271 11.6895 11.9083 11.9083C11.6895 12.1271 11.3928 12.25 11.0833 12.25Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9.91683 12.25V7.58331H4.0835V12.25" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.0835 1.75V4.66667H8.75016" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
							<button className="rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-white bg-indigo-700 focus:outline-none focus:bg-indigo-600 hover:bg-indigo-600 duration-150 justify-center items-center">
                                <p>Sign In</p>
                                <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.0833 12.25H2.91667C2.60725 12.25 2.3105 12.1271 2.09171 11.9083C1.87292 11.6895 1.75 11.3928 1.75 11.0833V2.91667C1.75 2.60725 1.87292 2.3105 2.09171 2.09171C2.3105 1.87292 2.60725 1.75 2.91667 1.75H9.33333L12.25 4.66667V11.0833C12.25 11.3928 12.1271 11.6895 11.9083 11.9083C11.6895 12.1271 11.3928 12.25 11.0833 12.25Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9.91683 12.25V7.58331H4.0835V12.25" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4.0835 1.75V4.66667H8.75016" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
  
	
    </div>
    
  )
}

export default NavBar