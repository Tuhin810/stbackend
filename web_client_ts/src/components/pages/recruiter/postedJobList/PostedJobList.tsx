import { useContext, useEffect, useState } from 'react'
import { recruiterContext } from '../../../../context/recruiterDetails/RecruiterContext';
import { getJobsByRecruiter } from '../../../../utils/apis/recruiter/recruiter';
import NotFound from '../../../shared/notfound/NotFound';
import JobCard from '../../applicant/jobs/jobCard/jobcard';
import { JobsDetails } from '../../../../@types/JobDetails';
import { useNavigate } from 'react-router-dom';
import { getuserDetails } from '../../../../utils/commonFunctions/GetuserDetails';

const PostedJobList = () => {
  const navigate=useNavigate();
  const [postedJobList, setPostedJobList] = useState<JobsDetails[]>([]);
  const { recruiterloggedinDetails } = useContext(recruiterContext);
  const { isLoggedin } = recruiterloggedinDetails;
  const { recruiterDetails } = recruiterloggedinDetails

  const getJobList = async (recruiterId: string) => {
    getJobsByRecruiter(recruiterId)
      .then(response => {
        if (response?.status === 200) {
          setPostedJobList(response.data.jobList)
        }
      })
  }
  useEffect(() => {
    console.log('rec',recruiterDetails);
    if (recruiterDetails != undefined) {
      getJobList(recruiterDetails._id);
    }
    else{
      const details=getuserDetails();
      const recruiterId=details._id;
      getJobList(recruiterId);
    }
  }, [isLoggedin]);

  const routeToNewJob = ()=>{
    navigate('/recruiter/postjob');
  }

  return (
    <div className="flex items-center justify-center h-screen w-100">
      {
        (postedJobList.length === 0) ?
          <>
            <NotFound message='You have not posted any job yet' />
          </> : <>
            <div className="job-list-container mx-none px-4 flex-wrap w-100">
              {
                postedJobList.map(job => {
                  return (
                    <JobCard
                      
                      companyName={job.company_id}
                      role={job.jobTitle}
                      location={job.location}
                      employmentType={job.jobType}
                      experience={job.experience_year}
                      salary={job.salary}
                    />
                  )
                })
              }

            </div>
          </>
      }
      <div className='fixed top-3/4 left-3/4'>
        <button className="inline-flex items-center px-4 justify-center w-full h-10 mr-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800" onClick={routeToNewJob}>
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
          
        </button>
      </div>
    </div>
  )
}

export default PostedJobList
