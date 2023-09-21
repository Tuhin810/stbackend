import { JobPostDetails } from "../../JobPostDetails";

export interface JobDetailsProps{
    jobDetails:JobPostDetails,
    isAccept?:boolean,
    InvitedJob?:string,
    jobId?:string,
    applicantId?:string,
}