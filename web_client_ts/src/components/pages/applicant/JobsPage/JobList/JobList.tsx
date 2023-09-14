import { JobCard } from "./jobCard/JobCard"
import "../JobPage.css"
import { useContext, useEffect, useState } from "react"
import { applicantContext } from "../../../../../context/applicantDetails/ApplicantContext"
import { getApplicantInvitedJobList } from "../../../../../utils/apis/applicant/Applicant"
import { Skelitoncard } from "../../../../shared/Skeliton/Skelitoncard"

export const JobList = () => {
  const { applicantloggedinDetails } = useContext(applicantContext);
  const { applicantDetails } = applicantloggedinDetails;
  const [jobDetailsList, setJobDetailsList] = useState<tempJobId[]>([]);

  const getInvitedJobList = async () => {
      const response = await getApplicantInvitedJobList(applicantDetails._id!);
      if (response?.status === 200) {
          setJobDetailsList(response?.data.data);
          console.log(response?.data.data);
          
      }
  }

  useEffect(() => {
      getInvitedJobList();
  }, []);
  return (
    <div>
      
        
        {
                (jobDetailsList.length != 0) ?
                    <>
                    <div className="flex  flex-col gap-3 px-6 h-screen overflow-y-scroll hidescroll">
                        {
                            jobDetailsList.map((temp_job, value) => {
                                return (
                                    
                                  <JobCard jobDetails={temp_job.jobId} key={value}/>
                                    // <JobCard jobDetails={temp_job.jobId} key={value} />
                                )
                            })
                        }
                    </div>
                    </> : <>
                    {/* <img
						src="https://cdni.iconscout.com/illustration/premium/thumb/empty-state-2130362-1800926.png"
						alt=" empty schedule" /> */}
                        <div className="flex  flex-col gap-3 px-6 h-screen overflow-y-scroll hidescroll">
                            
                            <Skelitoncard/>
                            <Skelitoncard/>
                            <Skelitoncard/>
                            <Skelitoncard/>
                        </div>
      
                              
                        
                        </>
            }
          

    
    </div>
  )
}
