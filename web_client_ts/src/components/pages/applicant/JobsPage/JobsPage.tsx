import { JobDescription } from "./JobDescription/JobDescription"
import { JobHeader } from "./JobHeader/JobHeader"
import { JobSearchBar } from "./SearchBar/JobSearchBar"
import { useContext, useEffect, useState } from "react"
import { applicantContext } from "../../../../context/applicantDetails/ApplicantContext"
import { getApplicantInvitedJobList } from "../../../../utils/apis/applicant/Applicant"
import { InvitedJob } from "../../../../@types/interfaces/InvitedJobList"
import { Skelitoncard } from "../../../shared/Skeliton/Skelitoncard"
import { JobCard } from "./JobList/jobCard/JobCard"
import "./JobPage.css"

export const JobsPage = () => {
  const { applicantloggedinDetails } = useContext(applicantContext);
  const { applicantDetails } = applicantloggedinDetails;
  const [jobDetailsList, setJobDetailsList] = useState<InvitedJob[]>([]);

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
    <div className="mt-20 h-screen">
      <div className="flex  py-5 gap-4 items-center justify-center ">
        <JobHeader /><JobSearchBar />
      </div>
      <div className="flex gap-4 ">
        <div className="md:w-1/2 md:pl-28 ">
          {
            (jobDetailsList.length != 0) ?
              <>
                <div className="flex  flex-col gap-3 px-6 h-screen overflow-y-scroll hidescroll">
                  {
                    jobDetailsList.map((invitedJob, value) => {
                      const { job_details } = invitedJob
                      return (
                        <JobCard jobDetails={job_details} key={value} InvitedJob={""} />
                      )
                    })
                  }
                </div>
              </> : <>

                <div className="flex  flex-col gap-3 px-6 h-screen overflow-y-scroll hidescroll">

                  <Skelitoncard />
                  <Skelitoncard />
                  <Skelitoncard />
                  <Skelitoncard />
                </div>   </>
          }
        </div>
        <div className="md:w-1/2 md:pr-16 hidden md:inline">
          {
            <JobDescription  />
          }
          
        </div>
      </div>
    </div>
  )
}
