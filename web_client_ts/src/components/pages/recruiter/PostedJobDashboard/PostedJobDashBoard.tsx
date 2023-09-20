
import { useParams } from "react-router-dom";
import "./postedjobsdashboard.css"
import { useEffect, useState } from "react";
import { JobDetails } from "../../../../@types/interfaces/JobDetails";
import { getJobDetailsByJobId } from "../../../../utils/apis/Job/jobpost";
import MatchedApplicantBoard from "../matchedApplicantBoard/MatchedApplicantBoard";
import Spinner from "../../../shared/spinner/Spinner";
const PostedJobDashboard = () => {
  const params = useParams();
  const [jobDetails, setJobDetails] = useState<JobDetails>({} as JobDetails);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const jobId = params.jobId;

  const getJobDetails = async () => {
    setIsLoading(true);
    await getJobDetailsByJobId(jobId!).then(response => {
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
    <main className="job-dashboard">
      {
        (isLoading) ? <Spinner /> :
          <>
            <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-6">
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 
              20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 
              0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-2xl font-bold"></span>

                  <span className="block text-2xl font-bold">{jobDetails?.no_of_applicants}</span>

                  <span className="block text-gray-500">job aplies</span>
                </div>
              </div>
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <span className="block text-2xl font-bold">{jobDetails?.no_of_matched_profiles}</span>
                  <span className="block text-gray-500">Mached Profiles</span>
                </div>
              </div>
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                  </svg>
                </div>
                <div>
                  <span className="inline-block text-2xl font-bold">{jobDetails?.no_of_vacancy}</span>
                  <span className="block text-gray-500">Job Vacancy</span>
                </div>
              </div>

            </section>
            <section className="grid md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-3 xl:grid-flow-col gap-6">
              <div className="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg">
                <div className="px-6 py-5 font-semibold text-2xl border-b border-gray-100">{jobDetails.job_title} <span className="text-gray-500 font-normal text-lg">({jobDetails.job_type})</span></div>
                <div className="p-4 flex-grow">
                  <div className="mt-2">

                    {/* job details start */}
                    <div className="flex justify-between gap-5 pb-4">
                      <div className="money flex gap-5">
                        <div className="bg-blue-100 rounded-full p-1 w-8 items-center justify-center flex h-8">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue"
                            className="bi bi-currency-rupee" viewBox="0 0 16 16">
                            <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                          </svg>
                        </div>
                        <div className="">
                          <div className="text-lg text-gray-900">Pay</div>
                          <div className="text-sm">₹{jobDetails.min_salary} - ₹{jobDetails.max_salary}</div>
                        </div>
                      </div>

                      <div className="money flex gap-5">
                        <div className="bg-blue-100 rounded-full p-1 w-8 items-center justify-center flex h-8">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue"
                            className="bi bi-currency-rupee" viewBox="0 0 16 16">
                            <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z" />
                          </svg>
                        </div>
                        <div className="">
                          <div className="text-lg text-gray-900">Job type</div>
                          <div className="text-sm">{jobDetails.job_type}</div>
                        </div>
                      </div>

                      <div className="money flex gap-5">
                        <div className="bg-blue-100 rounded-full p-1 w-8 items-center justify-center flex h-8">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue"
                            className="bi bi-currency-rupee" viewBox="0 0 16 16">
                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                          </svg>
                        </div>
                        <div className="">
                          <div className="text-lg text-gray-900 ">Daily hours</div>
                          <div className="text-sm">{jobDetails.duty_hours}&nbsp;hours</div>
                        </div>
                      </div>
                    </div>

                    {/* job description starts */}

                    <div className="max-h-52 overflow-y-scroll">
                      <h2 className="text-xl font-bold my-2"> Job Description</h2>
                      <p>{jobDetails.job_description}</p>
                    </div>

                    {/* job details ends */}

                  </div>
                </div>
              </div>
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-yellow-600 bg-yellow-100 rounded-full mr-6">
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path fill="#fff" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <div>
                  <span className="block text-lg font-bold">{jobDetails?.min_salary} - {jobDetails?.max_salary} Rs</span>
                  <span className="block text-gray-500">Salary</span>
                </div>
              </div>
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-teal-600 bg-teal-100 rounded-full mr-6">
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-xl font-bold">{jobDetails?.no_of_expery_date} days</span>
                  <span className="block text-gray-500">Expiry Left</span>
                </div>
              </div>
              <div className="row-span-3 bg-white shadow rounded-lg">
                <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
                  <span>job aplies by average mark</span>
                  <button type="button" className="inline-flex justify-center rounded-md px-1 -mr-1 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-600" id="options-menu" aria-haspopup="true" aria-expanded="true">
                    Descending
                    <svg className="-mr-1 ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  {/* <!-- Refer here for full dropdown menu code: https://tailwindui.com/components/application-ui/elements/dropdowns --> */}
                </div>
                <MatchedApplicantBoard matched_applicant_no={jobDetails?.no_of_matched_profiles} jobId={jobId!} />

              </div>

            </section>
          </>
      }

    </main>

  )
}

export default PostedJobDashboard;