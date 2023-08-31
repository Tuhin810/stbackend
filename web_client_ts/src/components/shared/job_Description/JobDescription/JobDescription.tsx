import { useNavigate, useParams } from "react-router-dom"
import Ratings from "../../Rating_stars/Ratings"
import { useEffect, useState } from "react";
import { JobDetails } from "../../../../@types/interfaces/JobDetails";
import { getJobDetailsByJobId } from "../../../../utils/apis/Job/jobpost";
import Spinner from "../../spinner/Spinner";

const JobDescription = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [jobDetails, setJobDetails] = useState<JobDetails>({} as JobDetails);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const getJobDetails = async () => {
    const recId = params.jobId;
    console.log(recId);
    setIsLoading(true);
    await getJobDetailsByJobId(recId!).then(response => {
      if (response?.status === 200) {
        setJobDetails(response.data.jobDetails);
        setIsLoading(false);
        console.log(jobDetails);
      }
    })
  }
  const routeToStat = () => {
    const path = '/recruiter/jobDashboard';
    navigate(path);
  }
  useEffect(() => {
    getJobDetails();
  }, []);

  return (

    <div className=' w-full  '>
      {
        (isLoading) ? <Spinner /> :
          <div className="mr-4  drop-shadow-xl border-t py-2 rounded-xl px-7 bg-white">
            <div className="heading mt-5">
              <div className="job title text-3xl mb-4 font-bold">
                {jobDetails?.jobTitle}
              </div>
              <div className="company_name mb-2 text-lg font-semibold text-blue-600 flex gap-2 items-center">
                <img className="h-12 w-12 bg-gray-700 rounded-lg border" src="https://img.naukimg.com/logo_images/groups/v1/3442166.gif" alt="" />
                {jobDetails.company_id?.name}
              </div>
              <div className="stars mb-6">
                Comapny Ratings:<Ratings />
              </div>
              {/* job detail starts */}
              <div className="job deails">
                <div className="heading text-xl mb-3 text-gray-700 uppercase font-bold flex gap-2 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="" viewBox="0 0 16 16">
                    <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
                  </svg>Job description:</div>
                <p>{jobDetails?.jobDescription}</p>
              </div>
              {/* job detail ends */}
              <div className="other desc">
                {/* Education starts */}
                <div className="Education my-6">
                  <div className="heading text-lg mb-3 text-gray-700 uppercase font-bold flex gap-2 items-center">
                    Education</div>
                  <p>{jobDetails?.qualification}</p>
                </div>
                {/* Education ends */}
                {/* Job Role starts */}
                <div className="Education my-6">
                  <div className="heading text-lg mb-3 text-gray-700 uppercase font-bold flex gap-2 items-center">
                    Job Type</div>
                  <p>{jobDetails?.jobType}</p>
                </div>
                {/*  Job Role ends */}
                {/* Job Role starts */}
                <div className="Education my-6">
                  <div className="heading text-lg mb-3 text-gray-700 uppercase font-bold flex gap-2 items-center">
                    Industry Type</div>
                  <p>{jobDetails?.company_id?.type}</p>
                </div>
                {/*  Job Role ends */}
                {/* Job Role starts */}
                <div className="Education my-6">
                  <div className="heading text-xl mb-3 text-gray-700 uppercase font-bold flex gap-2 items-center">
                    Skills</div>
                  <p>{jobDetails?.skills}</p>
                </div>
                {/*  Job Role ends */}
              </div>
              <div className="button-list text-center">
                <button type="button" className="text-white inline-flex items-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={routeToStat}>
                  <svg className="w-4 h-4 me-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1v14h16M4 10l3-4 4 4 5-5m0 0h-3.207M16 5v3.207" />
                  </svg>
                  Stats
                </button>
                <button type="button" className="text-white inline-flex items-center bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                  <svg className="w-4 h-4 me-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                    <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z" />
                  </svg>
                  Delete
                </button>
              </div>
            </div>
          </div>
      }

    </div>
  )
}

export default JobDescription