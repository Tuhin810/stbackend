import { useContext, useEffect } from 'react'
import { recruiterContext } from '../../../../context/recruiterDetails/RecruiterContext';
import { getJobsByRecruiter } from '../../../../utils/apis/recruiter/recruiter';
import NotFound from '../../../shared/notfound/NotFound';
import { JobDetailsListContext } from '../../../../context/jobDetails/JobDetailsContext';

import './PostedJobList.css';

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
            <th scope="col" className="px-6 py-3">
              Job Title
            </th>
            <th scope="col" className="px-6 py-3">
              Job Type
            </th>
            <th scope="col" className="px-6 py-3">
              Matched Profiles
            </th>
            <th scope="col" className="px-6 py-3">
              No of Applicants
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
              {
                jobList?.map((job,value) => {
                  return (
                    <tr className="bg-white border-b-2  hover:bg-gray-50">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                      {job.jobTitle}
                    </th>
                    <td className="px-6 py-4">
                      {job.jobType}
                    </td>
                    <td className="px-6 py-4">
                      {job.no_of_vacancy}
                    </td>
                    <td className="px-6 py-4">
                      {job.no_of_applicants}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <a href="#" className="font-medium text-blue-600 hover:underline">Edit</a>
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
