import { forwardRef } from "react"
import { MyProfileDetailsProps } from "../../../@types/interfaces/props/myProfileDetailsProps/MyProfileDetailsProps"
import { logo } from "../../../assets/images"

const Resume = forwardRef(({ defaultApplicantDetails, componentRef }: MyProfileDetailsProps) => {

    return (
        <div id="resume" ref={componentRef}>
            <div id='resume' className="container mx-auto p-8 bg-white mt-8 rounded shadow">
                <div className="flex items-center justify-between pb-6">
                    <div className="profile">
                        <img src={defaultApplicantDetails?.photo?.toString() || ""} alt="profile" className="rounded-xl h-24  sm:h-36" />
                    </div>
                    <div className="resume-heading">
                        <h1 className="text-3xl font-bold mb-1">{defaultApplicantDetails?.first_name} <span className='text-blue-600'>{defaultApplicantDetails?.last_name}</span></h1>
                        <p className="text-lg mb-1">Frontend Developer</p>
                        <p className='contact'> <span className='text-blue-600'>{defaultApplicantDetails?.email}</span> | {defaultApplicantDetails?.country_code} {defaultApplicantDetails?.phone}</p>
                    </div>
                </div>
                <hr className='mb-4' />
                <div className="mb-4">
                    <h2 className="text-xl font-semibold text-indigo-600">Profile</h2>
                    <p>Passionate frontend developer with a strong eye for design. Excels in creating dynamic and visually appealing websites using the latest web technologies.</p>
                </div>
                <hr className='mb-4' />
                <div className="mb-4">
                    <h2 className="text-xl font-semibold text-indigo-600">About Me</h2>
                    <div className="flex mt-1">
                        <ul className=' grid capitalize grid-cols-2 gap-x-8 gap-1'>
                            <li><span className="font-bold">Age</span>  : {new Date().getFullYear() - defaultApplicantDetails!.birth_year || 0}</li>
                            <li><span className="font-bold">Experience </span> : {defaultApplicantDetails?.experience_year } years</li>
                            <li><span className="font-bold">Current Address : </span>{defaultApplicantDetails?.current_address }</li>
                            <li><span className="font-bold">Permanent Address :</span> { defaultApplicantDetails?.permanent_address}</li>
                            <li><span className="font-bold">English Profiencey :</span> {defaultApplicantDetails?.spoken_english }</li>
                            <li><span className="font-bold">Mother Tounge :</span> {defaultApplicantDetails?.native_language }</li>
                        </ul>
                    </div>
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
                    <h2 className="text-xl font-semibold text-blue-600">Experience</h2>
                    {
                        defaultApplicantDetails?.experience_details.map((experience, key) => {
                            return (
                                <div className="mb-2" key={key}>
                                    <p className="font-semibold">{experience.job_role} - {experience.company}</p>
                                    <p className="text-cyan-400">{experience.start_year} - Present</p>
                                    <p>{experience.job_details}</p>
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
                                <div className='mb-2' key={value}>
                                    <p className="font-semibold">{qualification.qualification} - {qualification.inst_name}</p>
                                    <p className="text-blue-600 italic">From <span className='text-black'>{qualification.from_year}</span> To <span className='text-black'>{qualification.to_year}</span></p>
                                </div>
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
    )
})

export default Resume