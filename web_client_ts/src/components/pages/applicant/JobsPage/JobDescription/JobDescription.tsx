import "../JobPage.css"

export const JobDescription = () => {
  return (
    <div className=''>
        <div className="h-screen overflow-y-auto scroll bg-white w-full border-2 mb-2 rounded-lg drop-shadow-md  hidescroll ">
            <div className="sticky top-0 z-10  w-full  bg-white h-44 shadow-lg border-b-2  px-8 py-3 ">
                <div className="text-xl mb-2 text-gray-800 font-semibold hover:underline">Sales and Service Engineer</div>
                <div className="company text-xs text-blue-600  hover:underline">ORCHID SCIENTIFIC AND INNOVATIVE INDIA PVT LTD</div>
                {/* <div className=""><Ratings/></div> */}
                <div className="">Kolkata, West Bengal</div>
                <div className="">₹25,000 a month</div>
                <div className="flex gap-4 mt-2 ">
                    <button className="flex gap-1 items-center  bg-gradient-to-r from-blue-500 to-blue-600 hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-500 text-white rounded-lg py-2 px-4 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-check-lg" viewBox="0 0 16 16">
  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
</svg>Accept</button>
                    <button className="flex gap-1 items-center bg-gradient-to-r from-gray-600 to-gray-800 hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-900  text-white rounded-lg py-2 px-4 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>Reject</button>
                </div>
            </div>


            {/* Job Description */}
            <div className="description  h-3/4  px-5 ">
              {/* Job heading starts*/}
              <div className="heading pt-3">
              <div className="text-2xl text-gray-700 font-semibold mb-2">Job details</div>
                <p className="w-1/2 text-xs ">Here’s how the job details align with your job preferences.
                   Manage job preferences at any time in 
                   <span className="flex gap-2 items-center">your profile.
                   <a href="/applicant/profile/"> <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="blue" className="bi bi-arrow-up-right-square" viewBox="0 0 16 16">
                     <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"/>
                   </svg></a>
                  
                   </span> 
                  </p>
              </div>
              {/* Job heading ends */}
              {/* Jobs feature starts */}
              <div className="mt-7">
                <div className="flex flex-col gap-5">
                <div className="money flex gap-5">
                    <div className="bg-blue-100 rounded-full p-1 w-8 items-center justify-center flex h-8">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" 
                    className="bi bi-currency-rupee" viewBox="0 0 16 16">
             <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
                  </svg>
                          </div>
                          <div className="">
                            <div className="text-lg text-gray-900">Pay</div>
                            <div className="text-sm">25,000 a month</div>
                          </div>
                  </div>

                  <div className="money flex gap-5">
                    <div className="bg-blue-100 rounded-full p-1 w-8 items-center justify-center flex h-8">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" 
                    className="bi bi-currency-rupee" viewBox="0 0 16 16">
            <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/>
                   </svg>
                          </div>
                          <div className="">
                            <div className="text-lg text-gray-900">Job type</div>
                            <div className="text-sm">Full-time</div>
                          </div>
                  </div>

                  <div className="money flex gap-5">
                    <div className="bg-blue-100 rounded-full p-1 w-8 items-center justify-center flex h-8">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" 
                    className="bi bi-currency-rupee" viewBox="0 0 16 16">
            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
       </svg>
                          </div>
                          <div className="">
                            <div className="text-lg text-gray-900 ">Shift and schedule</div>
                            <div className="text-sm">Day shift</div>
                          </div>
                  </div>
                      </div>
              </div>
              {/* Jobs feature ends  */}
              <div className="px-10 border-2 w-full my-5"/>

                {/* Description part starts */}
                <div className="">
                  <div className="px-3">
                    <p className="text-gray-800">  Sales and servicing of scientific and laboratory equipments, marketing of scientific and laboraotry equipments at pharmacy and medical colleges, pharmaceutical research laboratories and government research organizations, installation of the above equipments in the territory West Bengal, Assam and Orissa.</p>
                  </div>
                 
                 
                  

                  <div className="py-2 px-3">
                    <div className="text-lg font-semibold mb-2 ">Industry:</div>
                    <p className="text-gray-800">IT Services & Consulting</p>
                  </div>

                  <div className="py-2 px-3">
                    <div className="text-lg font-semibold mb-2 ">Role Category:</div>
                    <p className="text-gray-800">Software Development</p>
                  </div>

                  <div className="py-2 px-3">
                  
                    <div className="text-lg font-semibold mb-2 ">Job Role:</div>
                    <p className="text-gray-800">Front End Developer</p>
                  </div>
                 
                  <div className="py-2 px-3">
        
                    <div className="text-lg font-semibold mb-2 ">Education:</div>
                    <p className="text-gray-800">B.Sc in Computers,BCA in Computers,B.Tech/B.E. in Computers</p>
                    
                  </div>

                      {/* Qualifications */}
                  <div className="py-5 px-3">
                  
                    <div className="text-lg font-semibold mb-2 ">Qualifications</div>
                    <p className="text-gray-800">xperience with performance tools and methodologies
Virtualization and Containers: Hyper-V, KVM, Linux, VMware, Docker or Kubernetes
Familiarity with tools such as IDEs, Git, GitHub, Jira and/or Wikis
Knowledge of web performance optimization techniques and tools
Passion to responsive and adaptive design principles and UI/UX best practices</p>
                  </div>


                  <div className="py-2 px-3 ">
                    
                    <div className="text-lg font-semibold mb-2 ">Skills:</div>
                    <div className="flex gap-2 ">
                    <div  className="flex  justify-center items-center m-1   py-2 px-3  
                                        rounded-xl  border bg-gray-100 border-gray-400 text-gray-900 ">
                                            <div className="  flex-col leading-none max-w-full  text-gray-900 ">Javasript</div>
                                        </div>
                                        <div  className="flex  justify-center items-center m-1   py-2 px-3  
                                        rounded-xl  border bg-gray-100 border-gray-400 text-gray-900 ">
                                            <div className="  flex-col leading-none max-w-full  text-gray-900 ">Css</div>
                                        </div>
                                        <div  className="flex  justify-center items-center m-1   py-2 px-3  
                                        rounded-xl  border bg-gray-100 border-gray-400 text-gray-900 ">
                                            <div className="  flex-col leading-none max-w-full  text-gray-900 ">GitHub</div>
                                        </div>
                                        <div  className="flex  justify-center items-center m-1   py-2 px-3  
                                        rounded-xl  border bg-gray-100 border-gray-400 text-gray-900 ">
                                            <div className="  flex-col leading-none max-w-full  text-gray-900 ">Jira</div>
                                        </div>
                                          <div  className="flex  justify-center items-center m-1   py-2 px-3  
                                        rounded-xl  border bg-gray-100 border-gray-400 text-gray-900 ">
                                            <div className="  flex-col leading-none max-w-full  text-gray-900 ">React</div>
                                        </div> 
                                         <div  className="flex  justify-center items-center m-1   py-2 px-3  
                                        rounded-xl  border bg-gray-100 border-gray-400 text-gray-900 ">
                                            <div className="  flex-col leading-none max-w-full  text-gray-900 ">Git</div>
                                        </div>
                                        <div  className="flex  justify-center items-center m-1   py-2 px-3  
                                        rounded-xl  border bg-gray-100 border-gray-400 text-gray-900 ">
                                            <div className="  flex-col leading-none max-w-full  text-gray-900 ">GUI</div>
                                        </div>
                                          </div>
                  
                  {/* COMPANY DETAILS STARTS*/}
                                          <div className="py-2 ">
                    <div className="text-lg font-semibold mb-2">Company Profile:</div>
                    <p className="text-sm pb-1">ORCHID SCIENTIFIC AND INNOVATIVE INDIA PVT LTD</p>
                    <p className="text-md pb-2 text-gray-800">Intel Technology India Pvt.Ltd focuses on creating innovative products that advance the next generation of technology. Intel with its strong technology heritage, provides an opportunity to work on cutting-edge technology, pushing the boundaries of innovation and transforming the way people live and work.</p>
                    
                  </div>
                  </div>
                          {/* COMPANY DETAILS ENDS*/}

                </div>    
                </div>
                 
                 {/* Description part ends*/}
        </div>
    </div>
  )
}