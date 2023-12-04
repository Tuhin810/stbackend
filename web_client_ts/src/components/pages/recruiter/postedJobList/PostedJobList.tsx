import { useContext, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { recruiterContext } from '../../../../context/recruiterDetails/RecruiterContext';
import { getJobsByRecruiter } from '../../../../utils/apis/recruiter/recruiter';
import { JobDetailsListContext } from '../../../../context/jobDetails/JobDetailsContext';
import BrodcastModal from '../brodcastModal/BrodcastModal';
import NotFound from '../../../shared/notfound/NotFound';
import { showModal } from '../../../../utils/commonFunctions/HandleModal';
import './PostedJobList.css';
import { LockModal } from '../modal/ErrorModal/LockModal/lockModal';

const PostedJobList = () => {
  const [jobId, setJobId] = useState("");
  const { jobListDispatch } = useContext(JobDetailsListContext);
  const { jobDetailsListDetails } = useContext(JobDetailsListContext);
  const { jobList } = jobDetailsListDetails;
  const { recruiterloggedinDetails } = useContext(recruiterContext);
  const { recruiterDetails } = recruiterloggedinDetails

  const getJobList = async (recruiterId: string) => {
    if (!jobDetailsListDetails.isFetched) {
      getJobsByRecruiter(recruiterId)
        .then(response => {
          if (response?.status === 200) {
            jobListDispatch({ type: "fetched", payload: response?.data.jobList })
            console.log(response);
          }
        })
    }
  }
  const openBrodcastModal = (jobId: string) => {
    setJobId(jobId);
    showModal("brodcast");
  }
  useEffect(() => {
    if (recruiterDetails) {
      if(recruiterDetails._id){
        getJobList(recruiterDetails._id);
      }
    }  
  }, []);

  return (
    <div className=" items-center w-full">
      {
        (jobList?.length === 0) ?
          <>
            <NotFound message='You have not posted any job yet' />
          </> : <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
              <table className="w-full text-sm text-left  text-gray-500 ">
                <thead className="text-xs text-gray-50  uppercase bg-[#0e4163] ">
                  <tr>
                    <th scope="col" className="px-6 py-3 ">
                      Job Title
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Job Type
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Post Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Matched Profiles
                    </th>
                    <th scope="col" className="px-6 py-3">
                      No of Applicants
                    </th>
                    <th scope="col" className="px-6 py-3 pl-16">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    jobList?.map((job, value) => {
                      return (
                        <tr className="bg-white border-b-2  hover:bg-gray-50" key={value}>
                          <th scope="row" className="px-6 hover:underline py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50">
                            < Link to={`/employer/jobDetails/${job._id}`}>{job.job_title}</Link>

                          </th>
                          <td className="px-6 py-4">
                            {job.job_type}
                          </td>
                          <td className="px-6 py-4">
                            {job.posted_date.toString()}
                          </td>
                          <td className="px-6 py-4 bg-gray-50">
                            {job.no_of_matched_profiles}
                          </td>
                          <td className="px-6 py-4">
                            {job.no_of_applicants}
                          </td>
                          <td className="px-6 py-4 ">
                            <div className="flex items-center gap-5">

                              <div className="my-1 cursor-pointer text-gray-800 
                              font-semibold text-lg leading-3  px-3 rounded-md tracking-normal 
                              py-3 hover:bg-gray-200 focus:outline-none">
                                <button onClick={() => openBrodcastModal(job._id!)} className="flex items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-broadcast" viewBox="0 0 16 16">
                                    <path d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707zm2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 1 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708zm5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708zm2.122-2.12a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.313.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
                                  </svg>
                                  <span className="ml-2 text-sm">Brodcast</span>
                                </button>
                              </div>
                              <div className=" p-3 hover:bg-gray-200 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-trash3" viewBox="0 0 16 16">
                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                              </svg></div>
                            </div>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>

            </div>
          </>
      }
      <BrodcastModal jobId={jobId} />
      <LockModal/>
    </div>


  )
}

export default PostedJobList
