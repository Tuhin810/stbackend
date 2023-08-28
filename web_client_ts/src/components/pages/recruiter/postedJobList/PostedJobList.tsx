import { useContext, useEffect, useState } from 'react'
import { recruiterContext } from '../../../../context/recruiterDetails/RecruiterContext';
import { getJobsByRecruiter } from '../../../../utils/apis/recruiter/recruiter';
import NotFound from '../../../shared/notfound/NotFound';
import JobCard from '../../../shared/jobCard/JobCard';
import { JobDetailsListContext } from '../../../../context/jobDetails/JobDetailsContext';

import './PostedJobList.css';

const PostedJobList = () => {
  //caling jobDetails context to reduce api calls
  const { jobListDispatch } = useContext(JobDetailsListContext);
  const { jobDetailsListDetails } = useContext(JobDetailsListContext);
  const {jobList} = jobDetailsListDetails;
  const { recruiterloggedinDetails } = useContext(recruiterContext);
  const { recruiterDetails } = recruiterloggedinDetails

  const getJobList = async (recruiterId: string) => {
    if (!jobDetailsListDetails.isFetched) {
      getJobsByRecruiter(recruiterId)
        .then(response => {
          if (response?.status === 200) {
            jobListDispatch({type:"fetched",payload:response?.data.jobList})
          }
        })
    }
  }
  useEffect(() => {
    console.log('rec', recruiterDetails);
    if (recruiterDetails != undefined) {
      getJobList(recruiterDetails._id);
    }
  }, []);


  return (

    <>

      <div className="flex items-center justify-center w-full">

        <div className="flex items-center justify-center w-full">

          {
            (jobList?.length === 0) ?
              <>
                <NotFound message='You have not posted any job yet' />
              </> : <>
                <div className="job-list-container w-full">
                  {
                    jobList?.map((job,value) => {
                      return (
                        <JobCard jobDetails={job} key={value}/>
                      )
                    })
                  }

                </div>
              </>
          }
        </div>
      </div>
    </>
  )
}

export default PostedJobList
