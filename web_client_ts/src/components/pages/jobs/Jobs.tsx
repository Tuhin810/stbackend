<<<<<<< Updated upstream
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
=======
import React, { useState } from "react";
import {JobDetailsPros} from "../../../../@types/interfaces/";
import { Link } from "react-router-dom";

export default function IndexPage({jobRole, role, functionalArea,stateCity,ctc,experience, minQualification, openings, prefExperience, prefEducation,jobType, jobDescription, companyName, compnayAbout, companyIndustry, companyEstd, companyEmpCount, companyWebsite, companyLinkedIn} : JobDetailsPros ) {


    const mainContStyle={
        backgroundColor: '#FFF',
        boxShadow: '1px 1px 4px #18A6D0'
    }

    return (
        <>
            <div className="pb-5 " > 
                {/* Page title starts */}
                <div className=" pt-8 pb-16 relative z-10 px-6 md:px-0">
                    <div className="container sm:pr-16 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between">
                        <div className="flex-col flex lg:flex-row items-start lg:items-center">

                            <button className=" shrink-0 focus:outline-none hover:text-[#18A6D0] hover:decoration-[#18A6D0] hover:underline transition duration-150 rounded-lg text-black">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left my-2 mr-1 inline" viewBox="0 0 16 16">
                              <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                              </svg>
                              Back
                            </button>

                            <div className="ml-0 lg:ml-14  my-6 lg:my-0">
                                <h4 className="text-neutral-700 text-4xl font-normal leading-10 mb-2">Job Role{jobRole}</h4>
                            </div>
                        </div>

                        <div>
                            <button className="shrink-0 focus:outline-none mr-3 hover:bg-[#18A6D0] transition duration-150 ease-in-out rounded-lg bg-white hover:text-white text-[#18A6D0] px-3 py-1 text-sm border-2 border-[#18A6D0]">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-share inline mr-2" viewBox="0 0 16 16">
                                <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
                              </svg>
                                Share
                            </button>
                            <button className=" shrink-0 focus:outline-none transition duration-150 ease-in-out hover:bg-black hover:text-white border bg-white rounded-lg text-black pl-3 pr-4 py-1  text-sm border-2 border-black">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmark inline mr-2" viewBox="0 0 16 16">
                                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                              </svg>
                              Save
                            </button>
                        </div>
                    </div>
                </div>
                {/* Page title ends */}
                <div className="container sm:px-6 px-4 mx-auto" >

                    <div className="rounded shadow relative bg-white z-10 -mt-8 mb-8 w-full min-h-[256px]" style={mainContStyle}>

                        <div className="job-desc-container p-4">

                            <div className="job-cont-flex sm:flex">
                                <div className="job-left-cont w-full sm:w-8/12 mr-4">
                                    <div className="job-desc-info mb-4">
                                        <div className="text-gray-500 text-xl font-medium leading-tight">
                                            ROLE
                                        </div>
                                        <div className="cnt pl-2 text-neutral-800 text-md font-medium leading-normal">
                                            Web Developer{role}
                                        </div>
                                    </div>
                                    <div className="job-desc-info mb-4">
                                        <div className="text-gray-500 text-xl font-medium leading-tight">
                                            FUNCTIONAL AREA
                                        </div>
                                        <div className="cnt pl-2 text-neutral-800 text-md font-medium leading-normal">
                                            Web Development{functionalArea}
                                        </div>
                                    </div>
                                    <div className="job-desc-info mb-4">
                                        <div className="text-gray-500 text-xl font-medium leading-tight">
                                            STATES/CITIES
                                        </div>
                                        <div className="cnt pl-2 text-neutral-800 text-md font-medium leading-normal">
                                            Delhi NCR{stateCity}
                                        </div>
                                    </div>

                                    <div className="job-desc-info-flex sm:flex">

                                        <div className="aA w-full sm:w-6/12 mr-2">
                                            <div className="job-desc-info mb-4">
                                                <div className="text-gray-500 text-xl font-medium leading-tight">
                                                    CTC
                                                </div>
                                                <div className="cnt pl-2 text-neutral-800 text-md font-medium leading-normal">
                                                    4.8-7.2{ctc} LPA
                                                </div>
                                            </div>
                                            <div className="job-desc-info mb-4">
                                                <div className="text-gray-500 text-xl font-medium leading-tight">
                                                    MINIMUM EXPERIENCE
                                                </div>
                                                <div className="cnt pl-2 text-neutral-800 text-md font-medium leading-normal">
                                                    1{experience} YRS
                                                </div>
                                            </div>
                                            <div className="job-desc-info mb-4">
                                                <div className="text-gray-500 text-xl font-medium leading-tight">
                                                    MINIMUM QUALIFICATION
                                                </div>
                                                <div className="cnt pl-2 text-neutral-800 text-md font-medium leading-normal">
                                                    6 Month Coding course{minQualification}
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="bB w-full sm:w-6/12 mr-2">
                                            <div className="job-desc-info mb-4">
                                                <div className="text-gray-500 text-xl font-medium leading-tight">
                                                    OPENINGS
                                                </div>
                                                <div className="cnt pl-2 text-neutral-800 text-md font-medium leading-normal">
                                                    1{openings}
                                                </div>
                                            </div>
                                            <div className="job-desc-info mb-4">
                                                <div className="text-gray-500 text-xl font-medium leading-tight">
                                                    PREFERED EXPERIENCE
                                                </div>
                                                <div className="cnt pl-2 text-neutral-800 text-md font-medium leading-normal">
                                                    2{prefExperience} YRS
                                                </div>
                                            </div>
                                            <div className="job-desc-info mb-4">
                                                <div className="text-gray-500 text-xl font-medium leading-tight">
                                                    PREFERED EDUCATION
                                                </div>
                                                <div className="cnt pl-2 text-neutral-800 text-md font-medium leading-normal">
                                                    B TECH CSE{prefEducation}
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="job-right-cont w-full sm:w-4/12">
                                    <div className="job-desc-info mb-4">
                                        <div className="text-gray-500 text-xl font-medium leading-tight">
                                            SKILLS
                                        </div>
                                        <div className="skill-cards flex flex-wrap">

                                            <div className="company-estd px-3 py-1 mx-2 my-2 shrink-0 bg-gray-500 rounded-md text-white font-semibold">
                                              Angular JS
                                            </div>
                                            <div className="company-estd px-3 py-1 mx-2 my-2 shrink-0 bg-gray-500 rounded-md text-white font-semibold">
                                              CSS
                                            </div>
                                            <div className="company-estd px-3 py-1 mx-2 my-2 shrink-0 bg-gray-500 rounded-md text-white font-semibold">
                                              HTML 5
                                            </div>
                                            <div className="company-estd px-3 py-1 mx-2 my-2 shrink-0 bg-gray-500 rounded-md text-white font-semibold">
                                              HTML 5
                                            </div>
                                        </div>
                                    </div>

                                    <div className="job-desc-info mb-4">
                                        <div className="text-gray-500 text-xl font-medium leading-tight">
                                            JOB TYPE
                                        </div>
                                        <div className="cnt pl-2 text-neutral-800 text-md font-medium leading-normal">
                                            FULL TIME{jobType}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="job-info-desc ">
                                <div className="text-gray-500 text-xl font-medium leading-tight">
                                    JOB DESCRIPTION
                                </div>
                                <div className="cnt pl-2 text-neutral-800 text-md font-medium leading-normal">
                                    {jobDescription}
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis, turpis vel malesuada convallis, mi risus condimentum neque, id tincidunt nibh lorem pulvinar erat. Sed sit amet nulla porta, imperdiet libero quis, pharetra massa. Nulla semper, ipsum sit amet tincidunt tristique, quam nunc hendrerit erat, quis tincidunt sapien urna finibus velit. Maecenas ac interdum dui, a mattis lacus. Sed metus dolor, rhoncus sed sapien non, rutrum vehicula purus. Sed vehicula sapien id sapien bibendum, a iaculis tellus auctor. Morbi id varius est, vitae lobortis neque. Vivamus at ultricies nisl. Nunc finibus elit vitae nulla gravida pharetra. Donec malesuada sapien pharetra, hendrerit ligula in, tincidunt arcu. Proin accumsan lobortis semper.

                                    Aliquam viverra risus at laoreet sollicitudin. Sed vel ornare lorem. Nunc vel mi ultricies, mollis dolor id, condimentum ipsum. Nam malesuada orci ligula, ut ultrices nibh bibendum ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis vulputate purus tellus, quis malesuada tortor elementum et. Etiam id ex vitae ligula eleifend finibus. Integer at elit nec lectus elementum fermentum. Maecenas iaculis dolor metus. Phasellus felis nibh, viverra dignissim rutrum eu, mattis sed tellus. Mauris ac justo vel risus varius maximus mollis a ex.

                                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam massa metus, interdum ac tristique non, euismod tempus nisi. Cras dignissim accumsan vehicula. Curabitur maximus massa turpis, et consequat felis eleifend at. Cras pharetra sem dolor. Nullam sem nisl, fringilla eget volutpat quis, posuere non ante. Pellentesque nec efficitur lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut quis venenatis orci. Aliquam pellentesque neque ut gravida malesuada. Donec scelerisque dolor non odio fermentum fermentum. Donec porttitor pellentesque dolor, ut efficitur dui porta in.
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-10">
              <div className=" pb-16 relative z-10 px-6 md:px-0">
                <div className="container sm:pr-16 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between">
                    <div className="flex-col flex lg:flex-row items-start lg:items-center">

                        <div className="ml-0 lg:ml-14 lg:my-0">
                            <h4 className="text-3xl font-bold leading-tight mb-2 ">About Company</h4>
                        </div>
                    </div>
                </div>
>>>>>>> Stashed changes
              </div>
              <div className="container sm:px-6 px-4 mx-auto" >

                <div className="rounded shadow relative bg-white z-10 -mt-8 mb-8 w-full min-h-[256px]" style={mainContStyle}>
                  <div className="comp-desc-container p-4">
                    <div className="flex justify-between items-center">
                      <div className="company-main-info flex items-center">
                        <img src="https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png" className="sm:w-20 sm:h-20 w-14 h-14 rounded-md"/>
                        <div className="text-neutral-800 text-lg font-medium leading-normal">
                          XYZ Company{companyName}
                        </div>
                      </div>
                      <div className="website-link-icon flex">
                        <Link to={companyWebsite}>
                            <button className="shrink-0 flex align-center focus:outline-none hover:text-[#18A6D0] hover:decoration-[#18A6D0] hover:underline transition duration-150 rounded-lg text-black">
                              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="ml-2 bi bi-globe inline" viewBox="0 0 16 16">
                                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
                              </svg>
                            </button>
                        </Link>
                        <Link to={companyLinkedIn}>
                            <button className="ml-3 shrink-0 flex align-center focus:outline-none hover:text-[#18A6D0] hover:decoration-[#18A6D0] hover:underline transition duration-150 rounded-lg text-black">
                              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-linkedin ml-2 inline" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                              </svg>
                            </button>
                        </Link>
                      </div>
                    </div>
                    <div className="other-comp-details">
                      <div className="text-gray-500 text-xl font-medium leading-tight">
                        About us
                      </div>
                      <div className="pl-2 text-neutral-800 text-md font-medium leading-normal">
                        {compnayAbout}At Tech Solution, we strategize and execute the ideal methodologies for your e-commerce business, with the goals of creating a unique, impactful digital brand presence and maximising your sales conversions.
                      </div>
                      <div className="text-gray-500 text-xl font-medium leading-tight">
                        Industry
                      </div>
                      <div className="pl-2 text-neutral-800 text-md font-medium leading-normal">
                        Software Development{companyIndustry}
                      </div>
                    </div>
                    <div className="company-main-info-end mt-6 sm:flex justify-between items-center">
                      <div className="small-card flex justify-start sm:justify-start w-5/6 sm:w-4/6 md:w-2/6">
                        <div className="company-estd px-3 py-1 mx-4  bg-gray-500 rounded-md text-white font-semibold">
                          Estd. 2013{companyEstd}
                        </div>
                        <div className="px-3 py1 bg-gray-500 rounded-md mx-4 text-white flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-person-fill inline shrink-0" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                          </svg>
                          &nbsp;20{companyEmpCount}
                        </div>
                      </div>
                      <div className="company-view-full shrink-0 mt-5 flex justify-end">
                        <button className=" shrink-0 focus:outline-none hover:text-[#18A6D0] hover:decoration-[#18A6D0] hover:underline transition duration-150 rounded-lg text-black flex items-center text-md font-medium leading-tight">
                          View Company&nbsp;
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right shrink-0 inline" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
        </>
    );
}