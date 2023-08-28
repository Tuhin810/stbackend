import { useParams } from "react-router-dom"
import Ratings from "../../Rating_stars/Ratings"
import { useEffect, useState } from "react";
import { JobDetails } from "../../../../@types/interfaces/JobDetails";
import { getJobDetailsByJobId } from "../../../../utils/apis/Job/jobpost";
import Spinner from "../../spinner/Spinner";
import { CompanyDetails } from "../../../../@types/CompanyDetails";

const JobDescription = () => {
  const params = useParams();
  const [jobDetails, setJobDetails] = useState<JobDetails>({} as JobDetails);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const getJobDetails = async () => {
    const recId = params.jobId;
    console.log(recId);
    setIsLoading(true);
    await getJobDetailsByJobId(recId!).then(response=>{
      if (response?.status === 200) {
        setJobDetails(response.data.jobDetails);
        setIsLoading(false);
        console.log(jobDetails);
      }
    })
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
        </div>
      </div>
      }

    </div>
  )
}

export default JobDescription