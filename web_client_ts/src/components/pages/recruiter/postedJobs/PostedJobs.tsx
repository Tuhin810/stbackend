import React, { useContext, useEffect, useState } from 'react'
import { globalContext } from '../../../../context/GlobalDetails/GlobalContext';
import { recruiterContext } from '../../../../context/recruiterDetails/RecruiterContext';
import JobList from '../../jobs/jobCard/jobList';

const PostedJobs = () => {
  const [postedJobList, setPostedJobList] = useState([]);
  const recruiterState = useContext(recruiterContext);
  const globalState = useContext(globalContext);
  const [recruiterId, setRecruiterId] = useState('');
  useEffect(() => {
    const { _id } = recruiterState.recruiterDetails;
  }, [])

  return (
    <div className="h-screen">
      <JobList />
    </div>
  )
}

export default PostedJobs
