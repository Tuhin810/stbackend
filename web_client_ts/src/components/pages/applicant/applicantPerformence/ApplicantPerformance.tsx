import { useEffect, useContext, useState } from 'react'
// import { ApplicantAcceptedJobList } from './ApplicantAcceptedJobList/ApplicantAcceptedJobList';
import { applicantContext } from "../../../../context/applicantDetails/ApplicantContext";
import { InvitedJob } from '../../../../@types/interfaces/InvitedJobList';
import { getApplicantInvitedJobList } from '../../../../utils/apis/applicant/Applicant';
// import { showModal } from '../../../../utils/commonFunctions/HandleModal';
import { ApplicantPerformanceSidebar } from './ApplicantPerformanceSidebar/ApplicantPerformanceSidebar';
import { AccepctJobCard2 } from './ApplicantAcceptedJobList/AcceptedJobsCard/AccepctJobCard2';

export const ApplicantPerformance = () => {

  const { applicantloggedinDetails } = useContext(applicantContext);
  const { applicantDetails } = applicantloggedinDetails;
  const [, setJobDetailsList] = useState<InvitedJob[]>([]);

  const getInvitedJobList = async () => {
    const response = await getApplicantInvitedJobList(applicantDetails._id!);

    if (response?.status === 200) {
      const filteredList = response.data.data.filter((job: { accept: boolean; }) => job.accept === true);
      setJobDetailsList(filteredList);
      console.log("list", filteredList);
    }
  }

  // const handlesSet = (data: InvitedJob) => {
  //   if (data && data.job_details) {
  //     setSelectedJob(data)
  //   }
  //   showModal('jobdesc')
  //   console.log(data);
  // }
  useEffect(() => {
    getInvitedJobList();
  }, []);

  return (
    <div className='mt-20 flex'>


      <ApplicantPerformanceSidebar />
      <div id="wrapper" className="flex h-[92vh]  bg-white sm:flex-col md:flex-row font-light w-full">

        <div id="content" className="px-8 hidescroll bg-transparent flex-grow flex-shrink flex-auto overflow-y-scroll">
          <div id="info" className="border-b border-grey-light h-16">
            <div className="flex justify-between flex-grow items-center border-b h-16">
              <div className="flex">
                <div className="text-2xl font-semibold text-gray-800">Accepted <span className='text-blue-500'>Jobs</span> </div>
              </div>
              <div className="flex">
                <ul className="flex list-reset text-black">
                  <li className="px-4">
                    <span className="text-sm font-bold flex gap-2 items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" className="bi bi-question-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                      </svg>
                      Help
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex w-full md:w-3/4 flex-col gap-5 mt-5 hidescroll h-screen ">
            <AccepctJobCard2 />
            <AccepctJobCard2 />
            <AccepctJobCard2 />
            <AccepctJobCard2 />
          </div>
        </div>
        <div className=" flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10 ">
          <div>
            <a title="Help" href="https://img.icons8.com/?size=128&id=7YSSAzKNXqOk&format=png" target="_blank" className="block h-16 w-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
              <img className="object-cover object-center w-full h-full " src="https://img.icons8.com/?size=128&id=7YSSAzKNXqOk&format=png" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

