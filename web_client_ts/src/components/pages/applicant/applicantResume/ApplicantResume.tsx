import { useContext } from 'react';
import { applicantContext } from '../../../../context/applicantDetails/ApplicantContext';
import './ApplicantResume.css';
import Resume from '../../../shared/resume/Resume';
const ApplicantResume = () => {
    const { applicantloggedinDetails } = useContext(applicantContext);
    const { applicantDetails } = applicantloggedinDetails;
    const downloadCv = () => {
        document.getElementById('downloadButton')!.remove();
        document.getElementById('resume')?.classList!.remove('w-2/3');
        window.print();
    }
    return (
        <div>
            <Resume defaultApplicantDetails={applicantDetails}/>
            <button type="button" id='downloadButton' className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 darkno:bg-gray-800 darkno:text-white darkno:border-gray-600 darkno:hover:bg-gray-700 darkno:hover:border-gray-600 darkno:focus:ring-gray-700" onClick={downloadCv}>Download</button>
        </div>
    )
}

export default ApplicantResume
