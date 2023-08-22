import { createContext } from "react";
import { RecruiterSignupDetails } from "../../@types/RecruiterSignupDetails";
import { JobsDetails } from "../../@types/JobDetails";


interface recruiterDetailsState{
    recruiterDetails:RecruiterSignupDetails,
    isLoggedIn:boolean,
    postedJobList:JobsDetails[],
    loggedIn:(recruiterDetails:RecruiterSignupDetails)=>void,
    loggedOut:()=>void,
    setJobList$:(jobDetails:JobsDetails[])=>void,
}

export const recruiterContext= createContext({} as recruiterDetailsState);
