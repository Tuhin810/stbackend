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
import NojobImg from "../../../../assets/images/NoJOb.svg"
// import { Animated_btn } from "../../../shared/Animated_button/Animated_btn"

import { hideModal, showModal } from "../../../../utils/commonFunctions/HandleModal"
import { InvitedAppliedJobDetailsListContext } from "../../../../context/invitedAppliedJobDetailsList/InvitedAcceptedJobDetailsContext"
import Spinner from "../../../shared/spinner/Spinner"
import RefreshButton from "./RefreshButton/RefreshButton"
import { Link } from "react-router-dom"

export const JobsPage = () => {
  const { applicantDetails } = useContext(applicantContext).applicantloggedinDetails;
  const { invitedAppliedJobDetailsListDetails, invitedAppliedJobListDispatch } = useContext(InvitedAppliedJobDetailsListContext);
  const { invitedJobList, isInvitedFetched } = invitedAppliedJobDetailsListDetails;
  const [selectedJob, setSelectedJob] = useState<InvitedJob | null>(null);
  const [loading, setLoading] = useState<boolean>(false);


  const getInvitedJobList = async () => {
    setLoading(true);
    const response = await getApplicantInvitedJobList(applicantDetails._id!);
    setLoading(false);
    if (response?.status === 200) {

      console.log("data", response.data.data);

      const filteredList = response.data.data.filter((job: { accept: boolean; }) => job.accept === false);

      invitedAppliedJobListDispatch({ type: "invited", payload: filteredList });

      console.log("invited jobs ", filteredList);


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
    if (!isInvitedFetched) {
      getInvitedJobList();
    }
  }, []);

  useEffect(() => {
    setSelectedJob(invitedJobList[0]);
  }, [invitedJobList])

  return (
    <>
      {(invitedJobList.length != 0) ?
        <>  <div className="bg-[#ffff] pt-20 h-screen md:pl-28 md:pr-16">
          {
            (loading) ? <Spinner /> : <> <div className="flex  py-7 px-8 md:px-0  gap-2  items-center  ">
              {/* <JobHeader /> */}
              <RefreshButton />
              <SearchBox />
            </div>
              <div className="flex">
                <div className="md:w-1/2  md:pr-4 ">


                  <div className="flex  flex-col gap-3 px-5 md:px-0 md:pr-6 h-screen overflow-y-scroll hidescroll">
                    {
                      invitedJobList.map((invitedJob, value) => {
                        const { job_details } = invitedJob
                        return (
                          <div onClick={() => handlesSet(invitedJob)} >
                            <JobCard jobDetails={job_details}
                              key={value} InvitedJob={""} jobId={""} applicantId={""} />
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
                <div id="jobdesc" className="md:w-1/2 -mt-10 hidden md:inline fixed md:relative top-24 md:top-0">
                  {/* <div onClick={() => hideModal('jobdesc')} className="md:hidden z-50 flex items-center text-sm fixed top-20 left-80 pl-1">
                    <img className="h-7 w-7" src="https://cdn.iconscout.com/icon/free/png-512/free-close-1957281-1650975.png?f=avif&w=512" alt="" />
                  </div> */}
                  {selectedJob && (
                    <JobDescription
                      jobDetails={selectedJob.job_details}
                      isAccept={selectedJob.accept}
                      jobId={selectedJob.jobId}
                      applicantId={selectedJob.applicantId} InvitedJob={""} />
                  )}
                </div>
              </div>

            </>
          }
        </div>
        </> : <>
          <div className="flex md:flex-row flex-col  pt-28 gap-3 mx-auto px-6 h-screen overflow-y-scroll hidescroll">
            <div className="md:w-1/2 pl-8">
              <h1 className="text-6xl mb-7 font-bold text-gray-800">No jobs Yet!</h1>
              <p className="text-sm pr-10 font-semibold text-gray-600">Upskilling yourself can be a great way to improve your job prospects and make yourself more competitive in the marketplace. It can also help you stay ahead of the curve in your field and prepare for new challenges.</p>
              <Link to="/applicant/profile" className="w-64 mt-9 text-blue-400 text-xl bg-white drop-shadow-lg border px-5 py-3 rounded-lg flex items-center"> Update your Skills
                <img className="h-10 w-10 ml-2" src="https://img.icons8.com/?size=96&id=gkgXdvj3Owk3&format=png" alt="" />
              </Link>
            </div>
            <div className="md:w-1/2">
              <img className="-mt-16 p-7" src={NojobImg} alt="" />
            </div>

          </div>
        </>
      }
    </>
  )
}
