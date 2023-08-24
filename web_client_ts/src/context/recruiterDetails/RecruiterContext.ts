import { createContext } from "react";
import { RecruiterDetails } from "../../@types/RecruiterDetails";
import { JobsDetails } from "../../@types/JobDetails";
import { RecruiterState } from "../../@types/interfaces/state/RecruiterState";



export const recruiterContext= createContext({} as RecruiterState);
