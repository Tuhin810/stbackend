import { JobDescription } from "./JobDescription/JobDescription"
// import { JobHeader } from "./JobHeader/JobHeader"
// import { JobSearchBar } from "./SearchBar/JobSearchBar"
import { useContext, useEffect, useState } from "react"
import { applicantContext } from "../../../../context/applicantDetails/ApplicantContext"
import { getApplicantInvitedJobList } from "../../../../utils/apis/applicant/Applicant"
import { InvitedJob } from "../../../../@types/interfaces/InvitedJobList"
import { Skelitoncard } from "../../../shared/Skeliton/Skelitoncard"
import { JobCard } from "./JobList/jobCard/JobCard"
import "./JobPage.css"
import { SearchBox } from "../../../shared/SearchBox/SearchBox"
// import { Animated_btn } from "../../../shared/Animated_button/Animated_btn"
import { FilterBtn } from "./FilterButton/FilterBtn"

export const JobsPage = () => {
  const { applicantloggedinDetails } = useContext(applicantContext);
  const { applicantDetails } = applicantloggedinDetails;
  const [jobDetailsList, setJobDetailsList] = useState<InvitedJob[]>([]);
  const [selectedJob, setSelectedJob] = useState<InvitedJob | null>(null);

  const getInvitedJobList = async () => {
    const response = await getApplicantInvitedJobList(applicantDetails._id!);
    if (response?.status === 200) {
      const filteredList = response.data.data.filter((job: { accept: boolean; }) => job.accept === false);
      setJobDetailsList(filteredList);
    }
  }
  const handlesSet = (data: any) => {
    if (data && data.job_details) {
      setSelectedJob(data);
    }
    console.log(data);
  }
  useEffect(() => {
    getInvitedJobList();
    if (!selectedJob) {
      setSelectedJob(jobDetailsList[0]);
    }
  }, [jobDetailsList]);

  return (
    <div className="mt-20 h-screen md:pl-28 md:pr-16">
      <div className="flex  py-7 px-8 md:px-0  gap-2  items-center  ">
        {/* <JobHeader /> */}

        <FilterBtn />
        <SearchBox />
      </div>
      <div className="flex">
        <div className="md:w-1/2  md:pr-4 ">
          {
            (jobDetailsList.length != 0) ?
              <>
                <div className="flex  flex-col gap-3 px-5 md:px-0 md:pr-6 h-screen overflow-y-scroll hidescroll">
                  {
                    jobDetailsList.map((invitedJob, value) => {
                      const { job_details } = invitedJob
                      return (
                        <div onClick={() => handlesSet(invitedJob)}>
                          <JobCard jobDetails={job_details}
                            key={value} InvitedJob={""} jobId={""} applicantId={""} />
                        </div>
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
                </div>
              </>
          }
        </div>
        <div className="md:w-1/2 hidden -mt-10  md:inline">

          {selectedJob && (
            <JobDescription
              jobDetails={selectedJob.job_details}
              jobId={selectedJob.jobId}
              applicantId={selectedJob.applicantId} InvitedJob={""} />
          )}
        </div>
      </div>
    </div>
  )
}
