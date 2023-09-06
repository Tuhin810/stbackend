import { useContext, useEffect} from 'react'
import { recruiterContext } from '../../../../context/recruiterDetails/RecruiterContext';
import { getJobsByRecruiter } from '../../../../utils/apis/recruiter/recruiter';
import NotFound from '../../../shared/notfound/NotFound';
import { JobDetailsListContext } from '../../../../context/jobDetails/JobDetailsContext';

import './PostedJobList.css';
import { hideModal, showModal } from '../../../../utils/commonFunctions/HandleModal';

const PostedJobList = () => {
  //caling jobDetails context to reduce api calls
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
          }
        })
    }
  }
  useEffect(() => {
    console.log('rec', recruiterDetails);
    if (recruiterDetails != undefined) {
      getJobList(recruiterDetails._id!);
    }
  }, []);

  
  return (

      <div className="flex items-center justify-center w-full">
        {
          (jobList?.length === 0) ?
          <>
            <NotFound message='You have not posted any job yet' />
          </> : <>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
          <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="px-6 py-3 bg-gray-50">
              Job Title
            </th>
            <th scope="col" className="px-6 py-3">
              Job Type
            </th>
            <th scope="col" className="px-6 py-3">
              Post Date
            </th>
            <th scope="col" className="px-6 py-3 bg-gray-50">
              Matched Profiles
            </th>
            <th scope="col" className="px-6 py-3">
              No of Applicants
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th> 
          </tr>
        </thead>
        <tbody>
              {
                jobList?.map((job,value) => {
                  return (
                    <tr className="bg-white border-b-2  hover:bg-gray-50" key={value}>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50">
                      {job.job_title}
                    </th>
                    <td className="px-6 py-4">
                      {job.job_type}
                    </td>
                    <td className="px-6 py-4">
                      {job.posted_date.toString()}
                    </td>
                    <td className="px-6 py-4 bg-gray-50">
                      {job.matched_applicant_list?.length}
                    </td>
                    <td className="px-6 py-4">
                      {job.applicant_list?.length}
                    </td>
                    <td className="px-6 py-4">
                    <div className="h-full hidden xl:flex items-center justify-center ">
                        <div className="h-full flex -ml-8">
                            <div className="flex items-center pl-8 relative cursor-pointer" >
                               
                                    <ul id='JobAction' className="hidden drop-shadow-xl z-20 gap-3 p-2 w-40 border-r bg-gray-50 border absolute rounded -left-36 shadow mt-16 -top-10 ">
                                        <li onClick={()=>{hideModal("JobAction")}} className="my-1 cursor-pointer text-gray-800 font-semibold text-lg leading-3  px-3 rounded-md tracking-normal py-3 hover:bg-gray-200 focus:outline-none">
                                            <div  className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-broadcast" viewBox="0 0 16 16">
  <path d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707zm2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 1 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708zm5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708zm2.122-2.12a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.313.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
</svg>
                                                <span className="ml-2">Brodcust</span>
                                            </div>
                                        </li>
                                        {/* <li onClick={()=>{hideModal("JobAction")}} className="my-1 flex items-center cursor-pointer flex text-yellow-600 font-semibold text-lg leading-3 bg-yellow-100 hover:bg-yellow-200 px-3 rounded-md tracking-normal py-3 hover:text-yellow-700 focus:text-indigo-700 focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="brown" className="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg>
                                            <span className="ml-2">Publish</span>
                                        </li> */}
                                        <li onClick={()=>{hideModal("JobAction")}} className=" my-1 flex items-center cursor-pointer flex text-gray-800 font-semibold text-lg leading-3  px-3 rounded-md tracking-normal py-3 hover:bg-gray-200 focus:text-indigo-700 focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"/>
  <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
   </svg>
                                            <span className="ml-2">View</span>
                                        </li>
                                       
                                       
                                    </ul>
                                
                                <div onClick={()=>showModal("JobAction")} className="px-2  border h-10 rounded-full flex items-center gap-2 hover:bg-gray-50">
                                <button  className="font-medium text-blue-600 hover:underline">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
</svg>
                      </button>
                                </div>

                            </div>
                        </div>
                    </div>
                      {/* <button onClick={()=>{setShow(false)}} className="font-medium text-blue-600 hover:underline">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
</svg>
                      </button> */}
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
      </div>
        
    
  )
}

export default PostedJobList
