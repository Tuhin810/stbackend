import { JobDetails } from "./JobDetails";

export interface JobDetailsList{ 
    isFetched:boolean,
    jobList:JobDetails[],
}