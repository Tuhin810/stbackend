import { JobPostDetails } from "../../JobPostDetails";

export interface JobDetailsProps{
    jobDetails:JobPostDetails,
    InvitedJob?:string,
    jobId?:string,
    applicantId?:string,
}