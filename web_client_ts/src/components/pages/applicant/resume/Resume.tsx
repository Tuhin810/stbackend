import { useContext } from 'react';
import { logo } from '../../../../assets/images';
import './Resume.css';
import { applicantContext } from '../../../../context/applicantDetails/ApplicantContext';
const Resume = () => {
    const { applicantloggedinDetails } = useContext(applicantContext);
    const { applicantDetails } = applicantloggedinDetails;
    const downloadCv = () => {
        document.getElementById('downloadButton')!.remove();
        document.getElementById('resume')?.classList!.remove('w-2/3');
        window.print();
    }
    return (
        <div>
            <div className="resume-container" id='resume'>
                <div id='resume' className="container mx-auto p-8 bg-white mt-8 rounded shadow w-2/3">
                    <div className="resume-heading text-center mb-6">
                        <h1 className="text-3xl font-bold mb-1">{applicantDetails?.first_name} <span className='text-blue-600'>{applicantDetails?.last_name}</span></h1>
                        <p className="text-lg mb-1">Frontend Developer</p>
                        <p className='contact'> <span className='text-blue-600'>{applicantDetails?.email}</span> | {applicantDetails?.country_code} {applicantDetails.phone}</p>
                    </div>
                    <hr className='mb-4' />
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold text-blue-600">Profile</h2>
                        <p>Passionate frontend developer with a strong eye for design. Excels in creating dynamic and visually appealing websites using the latest web technologies.</p>
                    </div>
                    <hr className='mb-4' />
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold text-blue-600">Skills</h2>
                        <div className="flex space-x-4">
                            <ul className='flex flex-wrap space-x-5'>
                                {
                                    applicantDetails?.skills.map((skill, value) => {
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
                        <p className="font-semibold">Frontend Developer - XYZ Creative Agency</p>
                        <p className="text-cyan-400">June 2019 - Present</p>
                        <p>Collaborated with cross-functional teams to deliver stunning web experiences. Led front-end development projects for clients in various industries.</p>
                    </div>
                    <hr className='mb-4' />
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold text-blue-600">Education</h2>
                        {
                            applicantDetails?.qualification_details.map((qualification, value) => {
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
            <button type="button" id='downloadButton' className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 darkno:bg-gray-800 darkno:text-white darkno:border-gray-600 darkno:hover:bg-gray-700 darkno:hover:border-gray-600 darkno:focus:ring-gray-700" onClick={downloadCv}>Download</button>
        </div>

    )
}

export default Resume
