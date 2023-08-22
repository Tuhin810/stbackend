import React, { useContext, useEffect, useState } from 'react'
import { globalContext } from '../../../../context/GlobalDetails/GlobalContext';
import { recruiterContext } from '../../../../context/recruiterDetails/RecruiterContext';
import JobList from '../../jobs/jobCard/jobList';
import { getJobsByRecruiter } from '../../../../utils/apis/recruiter/recruiter';
import NotFound from '../../../shared/notfound/NotFound';

const PostedJobs = () => {
  const [postedJobList, setPostedJobList] = useState([]);
  const recruiterState = useContext(recruiterContext);

  const getJobList = async (recruiterId: string) => {
    getJobsByRecruiter(recruiterId)
      .then(response => {
        if (response?.status === 200) {
          setPostedJobList(response.data.jobList)
        }
      })
  }
  useEffect(() => {
    const { _id: recruiterId } = recruiterState.recruiterDetails;
    getJobList(recruiterId);
  }, [])

  return (
    <div className="flex items-center justify-center h-screen">
      {
        (postedJobList.length === 0) ?
          <>
            <NotFound message='You have not posted any job yet' />
          </> : <>

          </>
      }
    </div>
  )
}

export default PostedJobs
