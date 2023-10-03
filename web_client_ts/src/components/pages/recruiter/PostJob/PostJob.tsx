import React, { useState, useEffect,useContext, useCallback} from 'react'
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
import { MultiValue, SingleValue } from 'react-select';
import { ISuggestion } from '../../../../@types/interfaces/Suggestion';
import { AutoCompleteProps } from '../../../../@types/interfaces/props/AutoCompleteProps/AutoCompleteProps';

const PostJob = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState<number>(1);
    const [buttonText, setButtontext] = useState<string>("Continue");
    const {recruiterDetails} = useContext(recruiterContext).recruiterloggedinDetails;
    const [jobDetails, setJobDetails] = useState<JobPostDetails>(
        {
            _id:'',
            posted_date: new Date(),
            job_title: '',
            job_type: 'full-time',
            job_description: '',
            no_of_vacancy: 0,
            min_experience_year: 0,
            max_experience_year:0,
            mandatory_skills: [],
            additonal_skills: [],
            location: [],
            min_salary:0,
            max_salary: 0,
            currency_type: '',
            company_id: recruiterDetails.company_id,
            max_age_limit: 60,
            min_age_limit:18,
            job_poster_id: recruiterDetails._id!,
            spoken_english_level: "beginner",
            is_target_based_salary: true,
            duty_hours: 8,
            is_disabled_alllow:true,
            no_of_expery_date:14,
            gender: 'male',
            qualification: '',
            any_charges: false,
        }
    );

    const incrementPage = () => {
        console.log(step);
        if (step < 5) {
            setStep(prevStep => prevStep + 1)
        }
        else if (step == 5) {
            console.log("");
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

    //it will be implemented soon

    const handleJobDetailsChange = useCallback((event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value} = event.target;

        if(name === "is_fresher_allowed") {
            setJobDetails(Object.assign({}, jobDetails, {[name]: value === "yes"? true: false}))
        }
        else if(name==="is_target_based_salary"){
            setJobDetails(Object.assign({}, jobDetails, {[name]: value === "yes"? true: false}))
        }
        else if(name==="any_charges"){
            setJobDetails(Object.assign({}, jobDetails, {[name]: value === "yes"? true: false}))
        }
        else if(name==="min_age_limit"){
            setJobDetails(Object.assign({}, jobDetails, {[name]: Number(value)}))
        }
        else if(name==="max_age_limit"){
            setJobDetails(Object.assign({}, jobDetails, {[name]: Number(value)}))
        }
        else if(name==="min_salary"){
            setJobDetails(Object.assign({}, jobDetails, {[name]: Number(value)}))
        }
        else if(name==="max_salary"){
            setJobDetails(Object.assign({}, jobDetails, {[name]: Number(value)}))
        }
        else if(name==="min_experience_year"){
            setJobDetails(Object.assign({}, jobDetails, {[name]: Number(value)}))
        }
        else if(name==="max_experience_year"){
            setJobDetails(Object.assign({}, jobDetails, {[name]: Number(value)}))
        }
        else if(name==="no_of_vacancy"){
            setJobDetails(Object.assign({}, jobDetails, {[name]: Number(value)}))
        }
        else if(name==="duty_hours"){
            setJobDetails(Object.assign({}, jobDetails, {[name]: Number(value)}))
        }
        else {
            
            setJobDetails(Object.assign({}, jobDetails, {[name]: value}))
        }
        
    }, [jobDetails])

    //handle changes
    
    const handleChangeMandatorySkillList = (event: MultiValue<AutoCompleteProps>) => {
        const tempArray:string[] = [];
        event.forEach((skill:any)=>{
            tempArray.push(skill.value);
        })
        setJobDetails(Object.assign({}, jobDetails, {["mandatory_skills"]: tempArray}))
    }

    const handleChangeAdditionalSkillList = (event: MultiValue<AutoCompleteProps>) => {
        const tempArray:string[] = [];
        event.forEach((skill:any)=>{
            tempArray.push(skill.value);
        })
        setJobDetails(Object.assign({}, jobDetails, {["additonal_skills"]: tempArray}))
    }

    const handleChangeQualification = (event: SingleValue<ISuggestion>) => {
        setJobDetails(Object.assign({}, jobDetails, {["qualification"]: event?.value}))
    }

    useEffect(() => {
        if (step == 5) {
            setButtontext("Post Job");
        }
        else {
            setButtontext("Continue");
        }
    }, [step]);

   
    return (
        <>
            <ProgressStep currentStep={step} stepcount={0}/>
            <div className="py-4">
                <div className="max-w-2xl mx-auto p-6 bg-white mt-10 rounded shadow">
                    <h1 className="text-2xl font-semibold mb-4">Post a<span className='text-blue-500'> Job</span>
                    </h1>
                    {(step == 1) ?
                        <PostJobPage1 handleChangeJobDetails={handleJobDetailsChange}/> :
                        (step == 2) ?
                            <PostJobPage2 handleChangeMandatorySkillList={handleChangeMandatorySkillList} handleChangeAdditionalSkillList={handleChangeAdditionalSkillList} handleChangeQualification={handleChangeQualification} /> :
                            (step == 3) ?
                                <PostJobPage3 handleChangeJobDetails={handleJobDetailsChange} /> :
                                (step == 4) ?
                                    <PostJobPage4 handleChangeJobDetails={handleJobDetailsChange}/> :
                                    (step == 5) ?
                                        <PostJobPage5 handleChangeJobDetails={handleJobDetailsChange} /> :
                                        null
                    }
                    <div className='flex justify-between'>
                        <button type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 darkno:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={decreasePage}>Back</button>
                        <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 darkno:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={incrementPage}>{buttonText}</button>
                    </div>
                </div>
            </div>
            <PostJobConfirmationModal jobDetails={jobDetails} InvitedJob={''} jobId={''} applicantId={''}/>
        </>
    )
}

export default PostJob