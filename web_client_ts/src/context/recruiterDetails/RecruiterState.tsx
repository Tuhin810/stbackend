
import { recruiterContext } from './RecruiterContext';
import { RecruiterSignupDetails } from '../../@types/RecruiterSignupDetails';
import { useState } from 'react';
import { JobsDetails } from '../../@types/JobDetails';

const RecruiterState = (props: any) => {
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    const [recruiterDetails, setRecruiterDetails] = useState<RecruiterSignupDetails>({} as RecruiterSignupDetails);
    const [postedJobList,setPostedJobList]=useState<JobsDetails[]>([])

    const loggedIn = (recruiterDetails: RecruiterSignupDetails) => {
        setRecruiterDetails(recruiterDetails);
        localStorage.setItem('details',JSON.stringify(recruiterDetails))
        localStorage.setItem('userType',"recruiter");
        setIsLoggedIn(true);
    }

    const loggedOut = () =>{
        setRecruiterDetails({} as RecruiterSignupDetails);
        setIsLoggedIn(false);
    }

    const setJobList$ = (jobDetails:JobsDetails[])=> {
        setPostedJobList(jobDetails)
    }

    return (
        <div>
            <recruiterContext.Provider value={{ recruiterDetails,isLoggedIn,postedJobList, loggedIn,loggedOut,setJobList$ }}>
                {props.children}
            </recruiterContext.Provider>
        </div>
    )
}

export default RecruiterState
