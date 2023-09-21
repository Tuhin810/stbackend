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

import { hideModal, showModal } from "../../../../utils/commonFunctions/HandleModal"
import { InvitedAppliedJobDetailsListContext } from "../../../../context/invitedAppliedJobDetailsList/InvitedAcceptedJobDetailsContext"
import Spinner from "../../../shared/spinner/Spinner"
import RefreshButton from "./RefreshButton/RefreshButton"

export const JobsPage = () => {
  const { applicantDetails } = useContext(applicantContext).applicantloggedinDetails;
  const {invitedAppliedJobDetailsListDetails,invitedAppliedJobListDispatch} = useContext(InvitedAppliedJobDetailsListContext);
  const {invitedJobList,isInvitedFetched} = invitedAppliedJobDetailsListDetails;
  const [selectedJob, setSelectedJob] = useState<InvitedJob | null>(null);
  const [loading,setLoading]=useState<boolean>(false);

  const getInvitedJobList = async () => {
    setLoading(true);
    const response = await getApplicantInvitedJobList(applicantDetails._id!);
    setLoading(false);
    if (response?.status === 200) {
      invitedAppliedJobListDispatch({type:"invited",payload:response.data.data});
    }
  }

  const handlesSet = (data: InvitedJob) => {
    if (data && data.job_details) {
      setSelectedJob(data);
    }
    showModal('jobdesc')
    console.log(data);
  }

  useEffect(() => {
    if(!isInvitedFetched){
      getInvitedJobList();
    }
  }, []);
  
  useEffect(()=>{
      setSelectedJob(invitedJobList[0]);
  },[invitedJobList])

  return (
    <div className="mt-20 h-screen md:pl-28 md:pr-16">
      <div className="flex  py-7 px-8 md:px-0  gap-2  items-center  ">
        {/* <JobHeader /> */}
        <RefreshButton/>
        <SearchBox />
      </div>
      <div className="flex">
        <div className="md:w-1/2  md:pr-4 ">
          {
            (loading)?<Spinner/>:
            (invitedJobList.length != 0) ?
              <>
                <div className="flex  flex-col gap-3 px-5 md:px-0 md:pr-6 h-screen overflow-y-scroll hidescroll">
                  {
                    invitedJobList.map((invitedJob, value) => {
                      const { job_details } = invitedJob
                      return (
                        <div  onClick={() => handlesSet(invitedJob)} >
                          <JobCard jobDetails={job_details}
                            key={value} InvitedJob={""} jobId={""} applicantId={""} />
                        </div>
                      )
                    })
                  }
                </div>
              </> : <>
                <div className="flex  flex-col gap-3 px-6 h-screen overflow-y-scroll hidescroll">
                  <h2>No Job Here</h2>
                </div>
              </>
          }
        </div>
        <div id="jobdesc" className="md:w-1/2 -mt-10 hidden md:inline fixed md:relative top-24 md:top-0">


          <div onClick={()=>hideModal('jobdesc')} className="md:hidden z-50 flex items-center text-sm fixed top-20 left-80 pl-1">
            <img className="h-7 w-7" src="https://cdn.iconscout.com/icon/free/png-512/free-close-1957281-1650975.png?f=avif&w=512" alt="" />
            
          </div>
          {selectedJob && (
            <JobDescription
              jobDetails={selectedJob.job_details}
              isAccept={selectedJob.accept}
              jobId={selectedJob.jobId}
              applicantId={selectedJob.applicantId} InvitedJob={""} />
          )}
        </div>
      </div>
    </div>
  )
}
