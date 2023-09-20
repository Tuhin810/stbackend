import { JobDescription } from "./JobDescription/JobDescription"

import { useContext, useEffect, useState } from "react"
import { applicantContext } from "../../../../context/applicantDetails/ApplicantContext"
import { getApplicantInvitedJobList } from "../../../../utils/apis/applicant/Applicant"
import { InvitedJob } from "../../../../@types/interfaces/InvitedJobList"
import { JobCard } from "./JobList/jobCard/JobCard"
import "./JobPage.css"
import { SearchBox } from "../../../shared/SearchBox/SearchBox"
import Spinner from "../../../shared/spinner/Spinner"
import { InvitedAppliedJobDetailsListContext } from "../../../../context/invitedAppliedJobDetailsList/InvitedAcceptedJobDetailsContext"
import RefreshButton from "./RefreshButton/RefreshButton"

export const JobsPage = () => {
  const [selectedJob, setSelectedJob] = useState<InvitedJob | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { applicantloggedinDetails } = useContext(applicantContext);
  const { isInvitedFetched, invitedJobList } = useContext(InvitedAppliedJobDetailsListContext).invitedAppliedJobDetailsListDetails;
  const { invitedAppliedJobListDispatch } = useContext(InvitedAppliedJobDetailsListContext);
  const { applicantDetails } = applicantloggedinDetails;

  const getInvitedJobList = async () => {
    setLoading(true);
    const response = await getApplicantInvitedJobList(applicantDetails._id!);
    setLoading(false);
    if (response?.status === 200) {
      invitedAppliedJobListDispatch({ type: "invited", payload: response.data.data })
    }
  }
  useEffect(() => {
    if (!isInvitedFetched) {
      getInvitedJobList();
    }
  }, []);

  useEffect(() => {
    setSelectedJob(invitedJobList[0]);
  }, [invitedJobList])

  return (
    <div className="mt-16 my-16 min-h-screen">

      <div className="body md:flex flex-col md:flex-row gap-10 md:px-32 py-10">
        <div className="md:w-1/2 px-5 md:px-0 md:pr-6">
          <div className="inline-flex w-full mb-5 items-center">
            <div onClick={getInvitedJobList} className="mt-1.5">
              <RefreshButton />
            </div>
            <SearchBox />
          </div>

          {
            (loading) ? <Spinner /> :
              <div className="flex w-full flex-col gap-3  h-screen overflow-y-scroll hidescroll">
                {
                  invitedJobList.map((invitedJob, value) => {
                    const { job_details } = invitedJob
                    return (
                      <div>
                        <JobCard jobDetails={job_details}
                          key={value} InvitedJob={""} jobId={""} applicantId={""} />
                      </div>
                    )
                  })
                }
              </div>
          }
        </div>
        <div className="md:w-1/2 hidden md:inline">


          <div onClick={()=>hideModal('jobdesc')} className="md:hidden z-50 flex items-center text-sm fixed top-20 left-80 pl-1">
            <img className="h-7 w-7" src="https://cdn.iconscout.com/icon/free/png-512/free-close-1957281-1650975.png?f=avif&w=512" alt="" />
            
          </div>
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
