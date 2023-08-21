import { createContext } from "react";
import { RecruiterSignupDetails } from "../../@types/RecruiterSignupDetails";


interface recruiterDetailsState{
    recruiterDetails:RecruiterSignupDetails,
    isLoggedIn:boolean,
    loggedIn:(recruiterDetails:RecruiterSignupDetails)=>void,
    loggedOut:()=>void,
}

export const recruiterContext= createContext({} as recruiterDetailsState);
