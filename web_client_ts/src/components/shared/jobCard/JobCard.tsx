import { useNavigate } from "react-router-dom";
import { JobDetailsProps } from "../../../@types/interfaces/props/JobDetailsProps";
import './JobCard.css';
import { defaultCompany } from "../../../assets/images";
import { formatDate, formatTitle } from "../../../utils/commonFunctions/Format";
import { useContext } from "react";
import { globalContext } from "../../../context/GlobalDetails/GlobalContext";
import TrashIcon from "../icons/trashIcon/TrashIcon";
// import { brodcastJob } from "../../../utils/apis/Job/jobpost";

const JobCard = ({ jobDetails }: JobDetailsProps) => {
    const navigate = useNavigate();
    const { globalLoggedIn } = useContext(globalContext);
    const routeToJobDetails = () => {
        const path = `/${globalLoggedIn.userType}/jobDetails/${jobDetails._id}`;
        navigate(path);
    }
    return (
        <div>
            <div className="card w-full p-4 mb-7 text-left bg-white border border-gray-200 rounded-lg shadow sm:p-8 cursor-pointer" onClick={routeToJobDetails}>
                <div className="flex justify-between items-center">
                    <div>
                        <p className="date px-2 mb-2">Posted On: {formatDate(jobDetails.posted_date)}</p>
                        <h5 className="text-2xl mb-1 font-bold text-black capitalize">{formatTitle(jobDetails.job_title)}</h5>
                        <p className="mb-4 text-sm text-gray-600">{jobDetails._id}</p>
                    </div>
                    <img src={defaultCompany} className="w-14" />
                </div>
                <p className="mb-2 inline-flex font-semibold items-center text-base text-gray-800 capitalize ">
                    <svg className="w-5 h-5 me-2 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8" d="M3 1h12M3 1v16M3 1H2m13 0v16m0-16h1m-1 16H3m12 0h2M3 17H1M6 4h1v1H6V4Zm5 0h1v1h-1V4ZM6 8h1v1H6V8Zm5 0h1v1h-1V8Zm-3 4h2a1 1 0 0 1 1 1v4H7v-4a1 1 0 0 1 1-1Z" />
                    </svg>
                    <span className="text-indigo-700 capitalize">{jobDetails.company_details?.name} |</span> {jobDetails.job_type}
                </p>
                <br />
                <p className="text-indigo-700 mb-2 inline-flex items-center">
                    <svg className="w-4 h-4 me-2 text-cyan-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                        <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                    </svg>
                    <span className="font-semibold"> Employer : </span>
                     {jobDetails.recruiter_details?.first_name} {jobDetails.recruiter_details?.last_name}
                </p>
                <div className="flex flex-row align-middle space-x-4">
                    <p className="salary inline-flex items-center">
                        <svg className="w-4 h-5 me-2 text-red-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                            <path d="M15.045.007 9.31 0a1.965 1.965 0 0 0-1.4.585L.58 7.979a2 2 0 0 0 0 2.805l6.573 6.631a1.956 1.956 0 0 0 1.4.585 1.965 1.965 0 0 0 1.4-.585l7.409-7.477A2 2 0 0 0 18 8.479v-5.5A2.972 2.972 0 0 0 15.045.007Zm-2.452 6.438a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                        </svg><span className="font-semibold"> Salary Range :</span>  {(jobDetails.min_salary)} - {(jobDetails.max_salary)}
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
                        <button type="button" className="text-white inline-flex items-center bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 darkno:focus:ring-red-800 font-medium rounded-lg 
                                    text-sm px-5 py-2.5 text-center mr-2 mb-2">
                            <TrashIcon />
                            Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobCard
