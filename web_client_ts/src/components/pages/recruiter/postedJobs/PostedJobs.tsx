import React, { useContext, useEffect } from 'react'
import { globalContext } from '../../../../context/GlobalDetails/GlobalContext';
import { recruiterContext } from '../../../../context/recruiterDetails/RecruiterContext';

const PostedJobs = () => {
  const recruiterState = useContext(recruiterContext);
  const globalState = useContext(globalContext);

  useEffect(() => {
    console.log('details', recruiterState.recruiterDetails);
    console.log('type', globalState.userType);
  }, [])
  return (
    <div>
      <p>Posted Jobs</p>
    </div>
  )
}

export default PostedJobs
