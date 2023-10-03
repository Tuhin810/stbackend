import { useEffect, useContext, useState } from 'react'
// import { ApplicantAcceptedJobList } from './ApplicantAcceptedJobList/ApplicantAcceptedJobList';
import { applicantContext } from "../../../../context/applicantDetails/ApplicantContext";
import { InvitedJob } from '../../../../@types/interfaces/InvitedJobList';
import { getApplicantInvitedJobList } from '../../../../utils/apis/applicant/Applicant';
import { Link } from 'react-router-dom';
import { Tooltip } from '../../../shared/Tootip/Tooltip';
import { AcceptedJobsCard } from './ApplicantAcceptedJobList/AcceptedJobsCard/acceptedJobsCard';
import { JobDescription } from '../JobsPage/JobDescription/JobDescription';
import { showModal } from '../../../../utils/commonFunctions/HandleModal';


export const ApplicantPerformance = () => {
 
  const { applicantloggedinDetails } = useContext(applicantContext);
  const { applicantDetails } = applicantloggedinDetails;
  const [jobDetailsList, setJobDetailsList] = useState<InvitedJob[]>([]);
  const [selectedJob, setSelectedJob] = useState<InvitedJob | null>(null);

  const getInvitedJobList = async () => {
    const response = await getApplicantInvitedJobList(applicantDetails._id!);
    
    if (response?.status === 200) {
      const filteredList = response.data.data.filter((job: { accept: boolean; }) => job.accept === true);
      setJobDetailsList(filteredList);
      console.log("list", filteredList);
    }
  }

  const handlesSet = (data: InvitedJob) => {
    if (data && data.job_details) {
     setSelectedJob(data)
    }
    showModal('jobdesc')
    console.log(data);
  }
  useEffect(() => {
    getInvitedJobList();
  }, []);

  return (
    <div className='mt-20'>

      <div className="  flex ">

        <main
          className="my-1 pt-2 pb-2 md:px-10 flex-1  dark-bg-black rounded-l-lg
		transition duration-500 ease-in-out overflow-y-auto">

          <div className="flex flex-col md:flex-row">
            <div
              className="mr-6 w-full md:w-1/2  py-2 flex-shrink-0 flex flex-col bg-white
				dark-bg-gray-600 rounded-lg">



              <h3
                className="flex items-center pt-1 pb-1 px-8 text-lg font-semibold
					capitalize dark-text-gray-300">

                <span>Accepted jobs</span>
                <button className="ml-2">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 256 512">
                    <path
                      d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9
								0l-22.6-22.6c-9.4-9.4-9.4-24.6
								0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6
								0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136
								136c9.5 9.4 9.5 24.6.1 34z"></path>
                  </svg>
                </button>
              </h3>

              <div>
                <ul className="pt-1 pb-2 px-3 overflow-y-auto">
                  {
                    jobDetailsList.slice(0, 2).map((invitedJob, value) => {
                      const { job_details } = invitedJob
                      return (
                        <div key={value}  onClick={() => handlesSet(invitedJob)}>
                         <AcceptedJobsCard  job_details={ job_details}/>
                        </div>
                      )
                    })
                  }
                </ul>


<div className="px-4 ">
  <a
                  href="#"
                  className="flex bg-blue-500 justify-center rounded-lg py-3 capitalize text-blue-100 px-8
						dark-text-blue-200">
                  <span>see all</span>
                </a>
</div>
                

              </div>

            </div>
<div  className="  ">
  <div  id="jobdesc" className="fixed md:w-full md:pl-8 top-20 md:pb-20 md:overflow-y-auto hidden -mt-8 md:pt-24 h-screen
   backdrop-blur-xl bg-gray-400/50">
                  {/* <div onClick={() => hideModal('jobdesc')} className="md:hidden z-50 flex items-center text-sm fixed top-8 left-72 pl-1">
                    <img className="h-7 w-7" src="https://cdn.iconscout.com/icon/free/png-512/free-close-1957281-1650975.png?f=avif&w=512" alt="" />
                  </div> */}
                  <div className="md:w-1/2">
                    {selectedJob && (
                    <JobDescription
                      jobDetails={selectedJob.job_details}
                      isAccept={selectedJob.accept}
                      jobId={selectedJob.jobId}
                      applicantId={selectedJob.applicantId} InvitedJob={""} />
                  )}
                  </div>
                  
                </div></div>
            
           
            <div
              className="md:mr-6 md:w-1/2 mx-2  py-2 flex-shrink-0 flex flex-col
				bg-purple-300 rounded-lg text-white">

              <h3
                className="flex items-center pt-1 pb-1 px-8 text-lg font-bold
					capitalize">
                {/* <!-- Header --> */}
                <span>Interview mail box</span>
                <button className="ml-2">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 256 512">
                    <path
                      d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9
								0l-22.6-22.6c-9.4-9.4-9.4-24.6
								0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6
								0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136
								136c9.5 9.4 9.5 24.6.1 34z"></path>
                  </svg>
                </button>
              </h3>

              <div className="flex flex-col items-center mt-12">
                <img
                  className='h-56'
                  src="https://cdni.iconscout.com/illustration/premium/thumb/empty-state-2130362-1800926.png"
                  alt=" empty schedule" />

                <span className="font-bold mt-8">Your inbox is empty</span>

                <span className="text-purple-500">
                  Find your first job
                </span>

                <Link to="/applicant/RecommendedJobs/" className="my-12 bg-purple-800 rounded-lg py-2 px-4" >
                  Find a Job
                </Link>

              </div>
            </div>

          </div>

        </main>

        <aside
          className=" my-1 mr-1 px-6 py-4 flex flex-col bg-gray-200 dark-bg-black
		dark-text-gray-400 rounded-r-lg overflow-y-auto hidden md:inline">
          {/* <!-- Right side NavBar --> */}


          <div className="flex flex-col capitalize text-3xl ">
            <span className="font-semibold flex items-center gap-3">
              {/* <img className='rounded-full h-12 w-12' src="data:image/jpeg;base64,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" alt="" /> */}
              hello,</span>
            <span className=''>{applicantDetails.first_name}!</span>

          </div>

          <div className="max-w-sm mt-5 w-full bg-white rounded-lg shadow -bg-gray-800 p-4 md:p-6">
            <div className="flex justify-between mb-5">
              <div className="grid gap-4 grid-cols-2">
                <div>
                  <h5 className="inline-flex items-center text-gray-500 -text-gray-400 text-sm leading-none font-normal mb-2">Accepted jobs
                  

                  </h5>
                  <p className="text-gray-900 -text-white text-2xl leading-none font-bold">{jobDetailsList.length}</p>
                </div>
                <div>
                  <h5 className="inline-flex items-center text-gray-500 -text-gray-400 leading-none font-normal mb-2 text-sm">Accepted by recruiter
                    <Tooltip con="jobs you are selected" />

                  </h5>
                  <p className="text-gray-900 -text-white text-2xl leading-none font-bold">0</p>
                </div>
              </div>

            </div>
            <div id="line-chart"></div>
            <div className="grid grid-cols-1 items-center border-gray-200 border-t -border-gray-700 justify-between mt-2.5">
              <div className="pt-5">
                <a href="#" className="px-5 py-2.5 text-sm font-medium text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 -:ring-4 -:outline-none -:ring-blue-300 rounded-lg text-center -bg-blue-600 -hover:bg-blue-700 --:ring-blue-800">
                  <svg className="w-3.5 h-3.5 text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2Zm-3 15H4.828a1 1 0 0 1 0-2h6.238a1 1 0 0 1 0 2Zm0-4H4.828a1 1 0 0 1 0-2h6.238a1 1 0 1 1 0 2Z" />
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                  </svg>
                  View full report
                </a>
              </div>
            </div>
          </div>
          <button
            className="mt-8 flex items-center py-4 px-3 text-white rounded-lg
			bg-red-600 shadow -:outline-none">
            {/* <!-- Action --> */}

            <svg className="h-5 w-5 fill-current mr-2 ml-3" viewBox="0 0 24 24">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
            </svg>

            <span>Bill your Students</span>

          </button>

        </aside>

      </div>
    </div>
  )
}

