import { Helmet } from 'react-helmet';
import titles from '../../../utils/titles';

const Jobs = () => {
  return (
 
    <>
       <Helmet>
        <title>{titles.home}</title>
      </Helmet>
      <div className="border rounded-md border-gray-300 m-10">
        <div className="flex flex-wrap mt-6 sm:justify-between items-center sm:px-6">
          <div className="flex flex-wrap sm:w-8/12 w-full mb-4 sm:mb-0">
              <div >
                  <a href="company-details.html"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/512px-WordPress_blue_logo.svg.png?20170312030453" alt="" className="md:mx-auto img-fluid rounded-3 w-14 h-14 sm:w-16 sm:h-16 mx-4 mt-4 sm:mt-0"/></a>
              </div>
              <div className="col-span-12 sm:ml-6 lg:col-span-8 px-4 sm:px-0 pt-4 sm:pt-0">
                  <div className="relative">
                      <h5 className="mb-1 text-gray-900">Product Designer / UI Designer</h5>
                      <ul className="flex gap-4 text-gray-500">
                          <li>
                              <i className="mdi mdi-account"></i> 8 Vacancy
                          </li>
                          <li className="text-yellow-500">
                              <span className="px-2 py-1 text-white bg-yellow-500 rounded text-13">4.8</span> <i className="align-middle mdi mdi-star"></i><i className="align-middle mdi mdi-star"></i><i className="align-middle mdi mdi-star"></i><i className="align-middle mdi mdi-star"></i><i className="align-middle mdi mdi-star-half-full"></i>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
            <div className="sm:w-4/12 w-full h-[64px] flex items-center">
              <a href="#applyNow" data-bs-toggle="modal" className=" mx-auto text-center w-[90%]  bg-blue-500 border-transparent text-white sm:h-[70%] py-2 rounded-md hover:shadow">Apply Now</a>
            </div>
        </div>
        <div className="px-6 pb-6">

            <div className="grid grid-cols-12 mt-8 gap-y-3 lg:gap-3">
                <div className="col-span-12 lg:col-span-3">
                    <div className="p-4 border rounded border-gray-300">
                        <p className="mb-1 text-gray-500 dark:text-gray-300 text-13">Experience</p>
                        <p className="font-medium text-gray-900 dark:text-gray-50">Minimum 1 Year</p>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-3">
                    <div className="p-4 border rounded border-gray-300 dark:border-neutral-600/80">
                        <p className="mb-1 text-gray-500 dark:text-gray-300 text-13">Employee type</p>
                        <p className="font-medium text-gray-900 dark:text-gray-50">Full Time</p>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-3">
                    <div className="p-4 border rounded border-gray-300 dark:border-neutral-600/80">
                        <p className="mb-1 text-gray-500 dark:text-gray-300 text-13">Position</p>
                        <p className="font-medium text-gray-900 dark:text-gray-50">Senior</p>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-3">
                    <div className="p-4 border rounded border-gray-300 dark:border-neutral-600/80">
                        <p className="mb-1 text-gray-500 dark:text-gray-300 text-13">Offer Salary</p>
                        <p className="font-medium text-gray-900 dark:text-gray-50">$2150/ Month</p>
                    </div>
                </div>
            </div>

            <div className="mt-5">
                <h5 className="mb-3 text-gray-900 dark:text-gray-50">Job Description</h5>
                <div>
                    <p className="mb-0 text-gray-500 dark:text-gray-300">As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent. You will help the team design beautiful interfaces that solve business challenges for our clients. We work with a number of Tier 1 banks on building web-based applications for AML, KYC and Sanctions List management workflows. This role is ideal if you are looking to segue your career into the FinTech or Big Data arenas.</p>
                </div>
            </div>

            <div className="mt-5">
                <h5 className="mb-3 text-gray-900 dark:text-gray-50">Responsibilities</h5>
                <div>
                    <p className="mb-3 text-gray-500 dark:text-gray-300">As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.</p>

                    <ul className="mb-0 text-gray-500 dark:text-gray-300">
                        <li className="mb-2 text-gray-500 dark:text-gray-300">
                        <svg className="inline bi bi-circle" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        </svg> Have sound knowledge of commercial activities.</li>
                        <li className="mb-2 text-gray-500 dark:text-gray-300"><i className="mr-2 uil uil-circle"></i> Build next-generation web applications with a focus on the client side</li> 
                        <li className="mb-2 text-gray-500 dark:text-gray-300"><i className="mr-2 uil uil-circle"></i> Work on multiple projects at once, and consistently meet draft deadlines</li> 
                        <li className="mb-2 text-gray-500 dark:text-gray-300"><i className="mr-2 uil uil-circle"></i> have already graduated or are currently in any year of study</li> 
                        <li className="text-gray-500 dark:text-gray-300"><i className="mr-2 uil uil-circle"></i> Revise the work of previous designers to create a unified aesthetic for our brand materials</li> 
                    </ul>
                </div>
            </div>

            <div className="mt-5">
                <h5 className="mb-3 text-gray-900 dark:text-gray-50">Qualification</h5>
                <div>
                    <ul className="mb-0 text-gray-500 dark:text-gray-300">
                        <li className="mb-2 text-gray-500 dark:text-gray-300"><i className="mr-2 uil uil-circle"></i> B.C.A / M.C.A under National University course complete.</li>
                        <li className="mb-2 text-gray-500 dark:text-gray-300"><i className="mr-2 uil uil-circle"></i> 3 or more years of professional design experience</li> 
                        <li className="mb-2 text-gray-500 dark:text-gray-300"><i className="mr-2 uil uil-circle"></i> have already graduated or are currently in any year of study </li> 
                        <li className="mb-2 text-gray-500 dark:text-gray-300"><i className="mr-2 uil uil-circle"></i> Advanced degree or equivalent experience in graphic and web design</li>
                    </ul>
                </div>
            </div>

            <div className="mt-5">
                <h5 className="mb-3 text-gray-900 dark:text-gray-50">Skill &amp; Experience</h5>
                <div>
                    <ul className="mb-0 text-gray-500 dark:text-gray-300">
                        <li className="mb-2 text-gray-500 dark:text-gray-300"><i className="mr-2 uil uil-circle"></i> Understanding of key Design Principal</li>
                        <li className="mb-2 text-gray-500 dark:text-gray-300"><i className="mr-2 uil uil-circle"></i> Proficiency With HTML, CSS, Tailwind</li> 
                        <li className="mb-2 text-gray-500 dark:text-gray-300"><i className="mr-2 uil uil-circle"></i> Wordpress: 1 year (Required) </li> 
                        <li className="mb-2 text-gray-500 dark:text-gray-300"><i className="mr-2 uil uil-circle"></i> Experience designing and developing responsive design websites </li>
                        <li className="mb-2 text-gray-500 dark:text-gray-300"><i className="mr-2 uil uil-circle"></i> web designing: 1 year (Preferred) </li>
                    </ul>
                </div>
            </div>

            <div className="mt-4">
                <span className="px-2 py-1 text-white rounded text-11 group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500">PHP</span>
                <span className="px-2 py-1 text-white rounded text-11 group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500">JS</span>
                <span className="px-2 py-1 text-white rounded text-11 group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500">Marketing</span>
                <span className="px-2 py-1 text-white rounded text-11 group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500">REACT</span>
                <span className="px-2 py-1 text-white rounded text-11 group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500">PHOTOSHOP</span>
            </div>

            <div className="pt-3 mt-4">
                <ul className="flex flex-wrap items-center gap-3 mb-0">
                    <li className="mt-1 dark:text-gray-50">
                        Share this job:
                    </li>
                    <li className="mt-1">
                        <a href="javascript:void(0)" className="btn group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500 border-transparent text-white hover:-translate-y-1.5"><i className="uil uil-facebook-f"></i> Facebook</a>
                    </li>
                    <li className="mt-1">
                        <a href="javascript:void(0)" className="btn bg-red-600 border-transparent text-white hover:-translate-y-1.5"><i className="uil uil-google"></i> Google+</a>
                    </li>
                    <li className="mt-1">
                        <a href="javascript:void(0)" className="btn bg-green-500 border-transparent text-white hover:-translate-y-1.5"><i className="uil uil-linkedin-alt"></i> linkedin</a>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </>
  )
}

export default Jobs
