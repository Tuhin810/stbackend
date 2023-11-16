import { forwardRef } from "react"
import { MyProfileDetailsProps } from "../../../@types/interfaces/props/myProfileDetailsProps/MyProfileDetailsProps"
import { logo } from "../../../assets/images"

const Resume = forwardRef(({ defaultApplicantDetails, componentRef, jobStatus }: MyProfileDetailsProps) => {



    return (
        <div id="resume" ref={componentRef}>
            <div id='resume' className="relative overflow-hidden  container mx-auto p-8  bg-white border">
                <div className="absolute left-0 top-0 h-16 w-16">
                    <div
                        className={`${(jobStatus === "hired") ? "bg-green-600" : ""}
      ${(jobStatus === "rejected") ? "bg-red-600" : ""} absolute  transform -rotate-45  text-center text-white font-semibold py-1 left-[-34px] top-[32px] w-[170px]`}>
                        {jobStatus}
                    </div>
                </div>

                <div id='resume' className="container mx-auto p-8 bg-white  ">

                    <div className="flex items-center justify-start gap-8 pb-6">

                        <div className="profile w-1/2 md:w-auto">
                            <img src={defaultApplicantDetails?.photo?.toString() || ""} alt="🖼️profile" className="rounded-2xl drop-shadow-lg h-32 " />
                        </div>
                        <div className="resume-heading">
                            <h1 className="text-xl md:text-3xl font-bold mb-1">{defaultApplicantDetails?.first_name} <span className='text-blue-600'>{defaultApplicantDetails?.last_name}</span></h1>
                            <p className="text-lg mb-1">Frontend Developer</p>
                            <p className='contact'> <span className='text-blue-600'>{defaultApplicantDetails?.email}</span> | {defaultApplicantDetails?.country_code} {defaultApplicantDetails?.phone === 0 ? "**********" : defaultApplicantDetails?.phone}</p>

                        </div>


                    </div>
                    <hr className='mb-4' />
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold text-indigo-700">Profile</h2>
                        <p className="text-gray-700">Passionate frontend developer with a strong eye for design. Excels in creating dynamic and visually appealing websites using the latest web technologies.</p>
                    </div>
                    <hr className='mb-4' />
                    <div className="mb-4">
                        <h2 className="text-xl font-bold mb-4 text-indigo-700">About Me</h2>
                        <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est
                            <ul className=' grid capitalize grid-cols-2 gap-x-8 gap-1'>
                                {
                                    defaultApplicantDetails?.birth_year ?
                                        <li><span className="font-bold">Age</span>  : {new Date().getFullYear() - defaultApplicantDetails.birth_year || 0}</li> : null
                                }
                                <li><span className="font-bold">Experience </span> : {defaultApplicantDetails?.experience_year} years</li>
                                <li><span className="font-bold">Current Address : </span>{defaultApplicantDetails?.current_address}</li>
                                <li><span className="font-bold">Permanent Address :</span> {defaultApplicantDetails?.permanent_address}</li>
                                <li><span className="font-bold">English Profiencey :</span> {defaultApplicantDetails?.spoken_english}</li>
                                <li><span className="font-bold">Mother Tounge :</span> {defaultApplicantDetails?.native_language}</li>
                            </ul>
                        </p>

                    </div>
                    <hr className='mb-4' />
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold text-blue-600">Skills</h2>
                        <div className="flex space-x-4">
                            <ul className='flex flex-wrap space-x-5'>
                                {
                                    defaultApplicantDetails?.skills.map((skill, value) => {
                                        return (
                                            <li key={value}>{skill}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <hr className='mb-4' />
                    <div className="mb-4">
                        <h2 className="text-xl font-bold mt-6 mb-4 text-blue-600">Experience</h2>
                        {
                            defaultApplicantDetails?.experience_details.map((experience, key) => {
                                return (
                                    <div className="mb-6" key={key}>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600 font-bold">{experience.job_role}</span>
                                            <p>
                                                <span className="text-gray-600 mr-2">at {experience.company}</span>
                                                <span className="text-gray-600">{experience.start_year} - Present</span>
                                            </p>
                                        </div>
                                        <p className="mt-2">{experience.job_details}.
                                        </p>
                                    </div>

                                )
                            })
                        }
                    </div>

                    <hr className='mb-4' />
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold text-blue-600">Education</h2>
                        {
                            defaultApplicantDetails?.qualification_details.map((qualification, value) => {
                                return (
                                    <>
                                        <div className="mb-6" key={value}>
                                            <div className="flex justify-between">
                                                <span className="text-gray-600 font-bold">{qualification.qualification}</span>
                                                <p>
                                                    <p className="text-blue-600 italic">From <span className='text-black'>{qualification.from_year}</span> To <span className='text-black'>{qualification.to_year}</span></p>
                                                </p>
                                            </div>

                                        </div>
                                    </>

                                )
                            })
                        }
                    </div>
                    <hr className='mb-4' />
                    <div className='copy_right flex items-center justify-center ms-auto w-100 relative bottom-0'>
                        <p>Powered By </p>
                        <img src={logo} className='h-8' />
                    </div>
                </div>
            </div>



        </div>
    )
})

export default Resume