import { JobPostDetails } from "../JobPostDetails";

export interface JobDetailsList{ 
    isFetched:boolean,
    jobList:JobPostDetails[],
}