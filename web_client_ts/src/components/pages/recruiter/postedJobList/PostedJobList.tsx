import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { recruiterContext } from '../../../../context/recruiterDetails/RecruiterContext';
import { getJobsByRecruiter } from '../../../../utils/apis/recruiter/recruiter';
import { JobDetailsListContext } from '../../../../context/jobDetails/JobDetailsContext';
import BrodcastModal from '../brodcastModal/BrodcastModal';
import NotFound from '../../../shared/notfound/NotFound';
import { showModal } from '../../../../utils/commonFunctions/HandleModal';
import './PostedJobList.css';
import { LockModal } from '../modal/ErrorModal/LockModal/lockModal';
import { deleteJobById } from '../../../../utils/apis/Job/jobpost';


const PostedJobList = () => {
  const [jobId, setJobId] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 5;
  const { jobListDispatch } = useContext(JobDetailsListContext);
  const { jobDetailsListDetails } = useContext(JobDetailsListContext);
  const { jobList } = jobDetailsListDetails;
  const { recruiterloggedinDetails } = useContext(recruiterContext);
  const { recruiterDetails } = recruiterloggedinDetails;
  const [loading, setLoading] = useState<boolean>(false);

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

  const handledelete = async (jobId: string) => {
    setLoading(true)
    if (jobId) {
      await deleteJobById(jobId)
        .then(response => {
          if (response?.status === 200) {
            jobListDispatch({ type: "delete", payload: response?.data.jobList })
            setLoading(false)
            if (currentJobs?.length === 1 && currentPage > 1) {
              setCurrentPage(currentPage - 1);
            }
          }
        })
    }
  }

  const openBrodcastModal = (jobId: string) => {
    setJobId(jobId);
    showModal("brodcast");
  }

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobList?.slice(indexOfFirstJob, indexOfLastJob);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil((jobList?.length || 0) / jobsPerPage);

  const paginationButtons = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          type="button"
          className={`inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md shadow-lg shadow-gray-300 border-gray-400 ${
            currentPage === index + 1 ? 'text-violet-50 bg-[#0e4163]' : 'bg-white'
          }`}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ));
    } else {
      const buttons = [];
      if (currentPage <= 2) {
        buttons.push(
          ...Array.from({ length: 3 }, (_, index) => (
            <button
              key={index + 1}
              type="button"
              className={`inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md shadow-lg shadow-gray-300 border-gray-400 ${
                currentPage === index + 1 ? 'text-violet-50 bg-[#0e4163]' : 'bg-white'
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))
        );
        buttons.push(<span key="ellipsis1">...</span>);
        buttons.push(
          <button
            key={totalPages}
            type="button"
            className={`inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md shadow-lg shadow-gray-300 border-gray-400 ${
              currentPage === totalPages ? 'text-violet-50 bg-[#0e4163]' : 'bg-white'
            }`}
            onClick={() => handlePageChange(totalPages)}
          >
            {totalPages}
          </button>
        );
      } else if (currentPage >= totalPages - 1) {
        buttons.push(
          <button
            key={1}
            type="button"
            className={`inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md shadow-lg shadow-gray-300 border-gray-400 ${
              currentPage === 1 ? 'text-violet-50 bg-[#0e4163]' : 'bg-white'
            }`}
            onClick={() => handlePageChange(1)}
          >
            1
          </button>
        );
        buttons.push(<span key="ellipsis2">...</span>);
        buttons.push(
          ...Array.from({ length: 3 }, (_, index) => (
            <button
              key={totalPages - 2 + index}
              type="button"
              className={`inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md shadow-lg shadow-gray-300 border-gray-400 ${
                currentPage === totalPages - 2 + index ? 'text-violet-50 bg-[#0e4163]' : 'bg-white'
              }`}
              onClick={() => handlePageChange(totalPages - 2 + index)}
            >
              {totalPages - 2 + index}
            </button>
          ))
        );
      } else {
        buttons.push(
          <button
            key={1}
            type="button"
            className={`inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md shadow-lg shadow-gray-300 border-gray-400 ${
              currentPage === 1 ? 'text-violet-50 bg-[#0e4163]' : 'bg-white'
            }`}
            onClick={() => handlePageChange(1)}
          >
            1
          </button>
        );
        buttons.push(<span key="ellipsis3">...</span>);
        buttons.push(
          ...Array.from({ length: 3 }, (_, index) => (
            <button
              key={currentPage - 1 + index}
              type="button"
              className={`inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md shadow-lg shadow-gray-300 border-gray-400 ${
                currentPage === currentPage - 1 + index ? 'text-violet-50 bg-[#0e4163]' : 'bg-white'
              }`}
              onClick={() => handlePageChange(currentPage - 1 + index)}
            >
              {currentPage - 1 + index}
            </button>
          ))
        );
        buttons.push(<span key="ellipsis4">...</span>);
        buttons.push(
          <button
            key={totalPages}
            type="button"
            className={`inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md shadow-lg shadow-gray-300 border-gray-400 ${
              currentPage === totalPages ? 'text-violet-50 bg-[#0e4163]' : 'bg-white'
            }`}
            onClick={() => handlePageChange(totalPages)}
          >
            {totalPages}
          </button>
        );
      }
      return buttons;
    }
  };

  useEffect(() => {
    if (recruiterDetails) {
      if (recruiterDetails._id) {
        getJobList(recruiterDetails._id);
      }
    }
    
  }, [jobList]);

  return (
    <div className=" items-center w-full">
      {
        (jobList?.length === 0) ?
          <>
            <NotFound message='You have not posted any job yet' />
          </> : <>
          <div className="flex mb-5 justify-end space-x-1 items-center text-gray-700">
          <svg 
        onClick={()=>setCurrentPage(currentPage - 1)}
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 cursor-pointer"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          clip-rule="evenodd"
        />
      </svg>

            {paginationButtons()}
            
            <svg
        onClick={()=>setCurrentPage(currentPage + 1)}
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 cursor-pointer"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        />
      </svg>
               </div>
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
                {(!loading)?
                <tbody className=''>
                  {
                    currentJobs?.map((job, value) => {
                      return (
                        <tr className="bg-white border-b-2  hover:bg-gray-50" key={value}>
                          <th scope="row" className="px-6 hover:underline py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50">
                            < Link to={`/employer/jobDetails/${job?._id}`}>{job?.job_title}</Link>

                          </th>
                          <td className="px-6 py-4">
                            {job?.job_type}
                          </td>
                          <td className="px-6 py-4">
                          {new Date(job?.posted_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                          </td>
                          <td className="px-6 py-4 bg-gray-50">
                            {job?.no_of_matched_profiles}
                          </td>
                          <td className="px-6 py-4">
                            {job?.no_of_applicants}
                          </td>
                          <td className="px-6 py-4 ">
                            <div className="flex items-center gap-5">

                              <div className="my-1 cursor-pointer text-gray-800 
                              font-semibold text-lg leading-3  px-3 rounded-md tracking-normal 
                              py-3 hover:bg-gray-200 focus:outline-none">
                                <button onClick={() => openBrodcastModal(job?._id ?? '')}
                                         className="flex items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-broadcast" viewBox="0 0 16 16">
                                    <path d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707zm2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 1 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708zm5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708zm2.122-2.12a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.313.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
                                  </svg>
                                  <span className="ml-2 text-sm">Brodcast</span>
                                </button>
                              </div>
                              <div onClick={()=>handledelete(job?._id ?? '')} className=" p-3 hover:bg-gray-200 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-trash3" viewBox="0 0 16 16">
                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                              </svg></div>
                            </div>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
                :
                <tbody>
                <div className="p-10 flex gap-2">
                <div className="">
                <img className='animate-spin h-6 w-6' src="https://img.icons8.com/?size=48&id=kUxasXnyoWm8&format=png" alt="" /></div>
                <div className="text-md font-semibold">Loading...</div>
                </div>
                </tbody>
                }
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
