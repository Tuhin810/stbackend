import React, { useState, useEffect,useContext } from 'react'
import ProgressStep from '../../../shared/ProgressStep/ProgressStep';
import { JobPostDetails } from '../../../../@types/JobPostDetails';
import PostJobPage1 from './postJob1/PostJobPage1';
import PostJobPage2 from './postJob2/PostJobPage2';
import PostJobPage3 from './postJob3/PostJobPage3';
import PostJobPage4 from './postJob4/PostJobPage4';
import PostJobPage5 from './postJob5/PostJobPage5';
import PostJobConfirmationModal from './PostJobConfirmation/PostJobConfirmationModal';
import { useNavigate } from 'react-router-dom';
import { recruiterContext } from '../../../../context/recruiterDetails/RecruiterContext';

const PostJob = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState<number>(1);
    const [buttonText, setButtontext] = useState<string>("Continue");
    const {recruiterloggedinDetails} = useContext(recruiterContext);
    const {recruiterDetails} = recruiterloggedinDetails;
    const [jobDetails, setJobDetails] = useState<JobPostDetails>(
        {
            _id:'',
            posted_date: new Date(),
            jobTitle: '',
            jobType: '',
            jobDescription: '',
            no_of_vacancy: 0,
            experience_year: 0,
            skills: [],
            additonal_skills: [],
            no_of_applicants: 0,
            location: [],
            salary: 0,
            currency_type: '',
            company_id: recruiterDetails.company_id,
            age_limit: 18,
            job_poster_id: recruiterDetails._id,
            spoken_english_required: false,
            is_target_based_salary: false,
            duty_hours: 8,
            is_fresher_allowed: true,
            gender: 'male',
            qualification: '',
            any_charges: false
        }
    );
    const incrementPage = () => {
        console.log(step);
        if (step < 5) {
            setStep(prevStep => prevStep + 1)
        }
        else if (step == 5) {
            console.log();
            showModal();
        }
    };
    const showModal = () => {
        console.log('y');
        document.getElementById('modal-overlay')!.classList.remove('hidden');
    }
    const decreasePage = () => {
        console.log(step);
        if (step > 1) {
            setStep(prevStep => prevStep - 1)
        }else{
            navigate("/recruiter/jobs")
        }
    };
    //handle changes
    const handleChangeJobTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setJobDetails(Object.assign({}, jobDetails, {
            jobTitle: value
        }))
    }
    const handleChangeJobType = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target;
        setJobDetails(Object.assign({}, jobDetails, {
            jobType: value
        }))
    }
    const handleChangeJobDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = event.target;
        setJobDetails(Object.assign({}, jobDetails, {
            jobDescription: value
        }))
    }
    const handleChangeQualification = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setJobDetails(Object.assign({}, jobDetails, {
            qualification: value
        }))
    }
    const handleChangeAge = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setJobDetails(Object.assign({}, jobDetails, {
            age_limit: value
        }))
    }
    const handleChangeLocation = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setJobDetails(Object.assign({}, jobDetails, {
            location: value
        }))
    }
    const handleChangeFresherAllowed = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target;
        setJobDetails(Object.assign({}, jobDetails, {
            is_fresher_allowed: value==="true"
        }))
    }
    const handleChangeExperience = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setJobDetails(Object.assign({}, jobDetails, {
            experience: value
        }))
    }
    const handleChangeVacancy = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setJobDetails(Object.assign({}, jobDetails, {
            no_of_vacancy: value
        }))
    }
    const handleChangeDutyHours = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setJobDetails(Object.assign({}, jobDetails, {
            duty_hours: value
        }))
    }
    const handleChangeSpokenEnglish = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target;
        setJobDetails(Object.assign({}, jobDetails, {
            spoken_english_required: value
        }))
    }
    const handleChangeGender = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target;
        setJobDetails(Object.assign({}, jobDetails, {
            gender: value
        }))
    }
    const handleChangeSalary = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setJobDetails(Object.assign({}, jobDetails, {
            salary: value
        }))
    }
    const handleChangeTargetBasedSalaried = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target;
        setJobDetails(Object.assign({}, jobDetails, {
            salary: value==="true"
        }))
    }
    const handleChangeChargeRequired = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target;
        setJobDetails(Object.assign({}, jobDetails, {
            salary: value==="true"
        }))
    }


    const pushMandatorySkills = (skill:string) => {
        jobDetails.skills.push(skill);
        return jobDetails.skills;
    }
    const pushAdditonalSkills = (skill:string) => {
        jobDetails.additonal_skills.push(skill);
        return jobDetails.additonal_skills;
    }


    useEffect(() => {
        if (step == 5) {
            setButtontext("Post Job");
        }
        else {
            setButtontext("Continue");
        }
    }, [step]);

    console.log(jobDetails);


    return (
        <>
         
            <ProgressStep />
            <div className="py-4">
                <div className="max-w-2xl mx-auto p-6 bg-white mt-10 rounded shadow">
                    <h1 className="text-2xl font-semibold mb-4">Post a<span className='text-blue-500'> Job</span>
                    </h1>
                    {(step == 1) ?
                        <PostJobPage1 handleChangeJobTitle={handleChangeJobTitle} handleChangeJobType={handleChangeJobType} handleChangeJobDescription={handleChangeJobDescription} /> :
                        (step == 2) ?
                            <PostJobPage2 pushMandatorySkills={pushMandatorySkills} pushAdditonalSkills={pushAdditonalSkills} handleChangeQualification={handleChangeQualification} /> :
                            (step == 3) ?
                                <PostJobPage3 handleChangeLocation={handleChangeLocation} handleChangeExperience={handleChangeExperience} handleChangeAge={handleChangeAge} handleChangeSalary={handleChangeSalary} handleChangeGender={handleChangeGender} /> :
                                (step == 4) ?
                                    <PostJobPage4 handleChangeDutyHours={handleChangeDutyHours} handleChangeFresher={handleChangeFresherAllowed} handleChangeSpokenEnglish={handleChangeSpokenEnglish} handleChangeVacancy={handleChangeVacancy}/> :
                                    (step == 5) ?
                                        <PostJobPage5 handleChangeChargeRequired={handleChangeChargeRequired} handleChangeTargetBasedSalaried={handleChangeTargetBasedSalaried} /> :
                                        null
                    }
                    <div className='flex justify-between'>
                        <button type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={decreasePage}>Back</button>
                        <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={incrementPage}>{buttonText}</button>
                    </div>
                </div>
            </div>
            <PostJobConfirmationModal jobDetails={jobDetails}/>
        </>
    )
}

export default PostJob