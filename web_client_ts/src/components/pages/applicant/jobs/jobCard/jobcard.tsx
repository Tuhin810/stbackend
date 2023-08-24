import { Link } from "react-router-dom";
import { CardProps } from "../../../../@types/interfaces/CardProps";

const JobCard =({companyName, role, location,salary, employmentType,experience}:CardProps)=>{
    
	return(
		<>	
			<div className="relative overflow-hidden transition-all duration-500 ease-in-out bg-white border rounded-md my-2 shadow shadow-blue-500/40">
                <div className="p-6">
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-12 lg:col-span-3 xl:col-span-2">
                            <div className="mb-3 text-center mb-md-0 ">
                                <a href="company-details.html"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/512px-WordPress_blue_logo.svg.png?20170312030453" alt="" className="md:mx-auto img-fluid rounded-3 w-14 h-14 sm:w-16 sm:h-16
                                 "/></a>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-9 xl:col-span-10">
                            <h5 className="mb-1 fs-17"><a href="job-details.html">{role}</a> 
                                <small className="font-normal text-gray-500 pl-2">
                                 	({experience} yrs. Exp)
                                </small>
                            </h5>
                            <ul className="flex flex-wrap mb-0 gap-y-3 lg:gap-2">
                                <li>
                                    <p className="mb-0 text-sm text-gray-500 ">{companyName}</p>
                                </li>
                                <li>
                                    <p className="mb-0 text-sm text-gray-500 ml-2 sm:ml-0">
	                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-geo-alt-fill inline mr-0.5" viewBox="0 0 16 16">
										  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
										</svg>
	 									{location}
 									</p>
                                </li>
                                <li>
                                    <p className="mb-0 text-sm text-gray-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-cash-stack inline mr-1" viewBox="0 0 16 16">
									  <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1H1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
									  <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2H3z"/>
									</svg> $250 - $800 / month</p>
                                </li>
                            </ul>
                            <div className="mt-4">
                                <div className="flex flex-wrap gap-1.5">
                                    <span className="bg-green-500/20 text-green-500 text-11 px-2 py-0.5 font-medium rounded">{employmentType}</span>
                                    <span className="bg-yellow-500/20 text-yellow-500 text-11 px-2 py-0.5 font-medium rounded">{salary}</span>
                                    {/*<span className="bg-sky-500/20 text-sky-500 text-11 px-2 py-0.5 font-medium rounded">Private</span>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 ">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 md:col-span-6 lg:col-span-7">
                            <ul className="flex flex-wrap gap-1 text-gray-700 ">
                                <li>
                                	<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-chevron-double-right inline mr-1" viewBox="0 0 16 16">
									  <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
									  <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
									</svg> 
                                	Keywords :
                                </li>
                                <li><a href="javascript:void(0)" className="primary-link text-muted">Ui designer</a>,</li>
                                <li><a href="javascript:void(0)" className="primary-link text-muted">developer</a></li>
                            </ul>
                        </div>
                        <div className="col-span-12 mt-2 md:col-span-6 lg:col-span-5 lg:mt-0  flex flex-wrap justify-evenly items-center">
                        	<div className="ltr:lg:text-right rtl:lg:text-left ">
                                <Link to="/recruiter/jobDashboard/" data-bs-toggle="modal" className="sm:px-2 sm:py-2.5  text-blue-600 hover:underline underline-offset-[6px] decoration-2 rounded-md text-md rounded-md ">View</Link>
                            </div>
                            <div className="ltr:lg:text-right rtl:lg:text-left ">
                                <a href="#applyNow" data-bs-toggle="modal" className="sm:px-2 sm:py-2.5  text-red-600 hover:underline underline-offset-[6px] decoration-2 rounded-md text-md rounded-md ">Reject</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute top-4 right-4">
                    <div className="p-2 rounded-md">
                        <a href="javascript:void(0)">
                        	<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-600 text-white bi bi-heart" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
							 	<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
							</svg>
                        </a>
                    </div>
                </div>
            </div>

		</>
	)
}

export default JobCard