import { useNavigate } from "react-router-dom";
import { JobDetailsProps } from "../../../@types/interfaces/props/JobDetailsProps";
import './JobCard.css';
import { defaultCompany } from "../../../assets/images";
import { formatDate, formatTitle } from "../../../utils/commonFunctions/Format";
import { useContext } from "react";
import { globalContext } from "../../../context/GlobalDetails/GlobalContext";

const JobCard = ({ jobDetails }: JobDetailsProps) => {
    const navigate = useNavigate();
    const { globalLoggedIn } = useContext(globalContext);
    const routeToJobDetails = () => {
        const path = `/${globalLoggedIn.userType}/jobDetails/${jobDetails._id}`;
        navigate(path);
    }
    const formatSalaryRange = (salary: number): string => {
        if (salary === 0) {
            return "Not Disclosed"
        }
        return salary.toString();
    }

    return (
        <div>
            <div className="card w-full p-4 mb-7 text-left bg-white border border-gray-200 rounded-lg shadow sm:p-8 cursor-pointer" onClick={routeToJobDetails}>
                <div className="flex justify-between items-center">
                    <div>
                        <p className="date bg-teal-200 text-blue-600 px-4 mb-2">Posted On: {formatDate(jobDetails.posted_date)}</p>
                        <h5 className="text-2xl mb-4 font-bold text-black">{formatTitle(jobDetails.jobTitle)}</h5>
                    </div>
                    <img src={defaultCompany} className="w-14" />
                </div>
                <p className="mb-2 inline-flex font-semibold items-center text-base text-gray-800 ">
                    <svg className="w-5 h-5 me-2 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.8" d="M3 1h12M3 1v16M3 1H2m13 0v16m0-16h1m-1 16H3m12 0h2M3 17H1M6 4h1v1H6V4Zm5 0h1v1h-1V4ZM6 8h1v1H6V8Zm5 0h1v1h-1V8Zm-3 4h2a1 1 0 0 1 1 1v4H7v-4a1 1 0 0 1 1-1Z" />
                    </svg>
                    <span className="text-blue-600">Company Name | </span> {jobDetails.jobType}
                   
                </p>
                <br />
                <p className="text-blue-600 mb-2 inline-flex items-center">
                    <svg className="w-4 h-4 me-2 text-cyan-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                        <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                    </svg>
                    <span className="font-semibold"> Location : </span>
                    {jobDetails.location}
                </p>
                <div className="flex flex-row align-middle space-x-4">
                    <p className="salary inline-flex items-center">
                        <svg className="w-4 h-5 me-2 text-red-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                            <path d="M15.045.007 9.31 0a1.965 1.965 0 0 0-1.4.585L.58 7.979a2 2 0 0 0 0 2.805l6.573 6.631a1.956 1.956 0 0 0 1.4.585 1.965 1.965 0 0 0 1.4-.585l7.409-7.477A2 2 0 0 0 18 8.479v-5.5A2.972 2.972 0 0 0 15.045.007Zm-2.452 6.438a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                        </svg><span className="font-semibold"> Salary Range :</span>  {formatSalaryRange(jobDetails.salary)}
                    </p>
                    <p className="salary inline-flex items-center">
                        <svg className="w-4 h-4 me-2 text-blue-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 18">
                            <path d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                        </svg> Applicants : {jobDetails.no_of_applicants}
                    </p>

                </div>
                <div className="w-full threeButtons justify-between mt-5">
                    <div className="left-buttons ">
                        <button type="button" className=" noneDisplayAfter420px py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 ">See Details</button>
                    </div>
                    <div className="right-buttons">
                        {
                            (globalLoggedIn.userType === "applicant") ?
                                <>
                                    <button type="button" className="text-white inline-flex items-center bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 shadow-lg shadow-purple-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                        <svg className="w-4 h-4 me-2 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.8" d="M1 5v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H1Zm0 0V2a1 1 0 0 1 1-1h5.443a1 1 0 0 1 .8.4l2.7 3.6H1Zm10 4 2 2-2 2m1.5-2H4.781" />
                                        </svg>
                                        View
                                    </button>
                                    <button type="button" className="text-white inline-flex items-center bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg 
                                    text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                        <svg className="w-4 h-4 me-2 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.8" d="m13 7-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                        Ignore</button>
                                </> :
                                <>
                                    <button type="button" className="text-white inline-flex items-center bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 shadow-lg shadow-purple-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                        <svg className="w-4 h-4 me-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M15.133 10.632v-1.8a5.406 5.406 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C4.867 13.018 3 13.614 3 14.807 3 15.4 3 16 3.538 16h12.924C17 16 17 15.4 17 14.807c0-1.193-1.867-1.789-1.867-4.175ZM4 4a1 1 0 0 1-.707-.293l-1-1a1 1 0 0 1 1.414-1.414l1 1A1 1 0 0 1 4 4ZM2 8H1a1 1 0 0 1 0-2h1a1 1 0 1 1 0 2Zm14-4a1 1 0 0 1-.707-1.707l1-1a1 1 0 1 1 1.414 1.414l-1 1A1 1 0 0 1 16 4Zm3 4h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2ZM6.823 17a3.453 3.453 0 0 0 6.354 0H6.823Z" />
                                        </svg>
                                        Publish
                                    </button>
                                    <button type="button" className="text-white inline-flex items-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
                                        <svg className="w-4 h-4 me-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="m13.835 7.578-.005.007-7.137 7.137 2.139 2.138 7.143-7.142-2.14-2.14Zm-10.696 3.59 2.139 2.14 7.138-7.137.007-.005-2.141-2.141-7.143 7.143Zm1.433 4.261L2 12.852.051 18.684a1 1 0 0 0 1.265 1.264L7.147 18l-2.575-2.571Zm14.249-14.25a4.03 4.03 0 0 0-5.693 0L11.7 2.611 17.389 8.3l1.432-1.432a4.029 4.029 0 0 0 0-5.689Z" />
                                        </svg>
                                        Edit
                                    </button>
                                </>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobCard
