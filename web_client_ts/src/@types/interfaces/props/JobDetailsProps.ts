import { JobDetails } from "../JobDetails";

export interface JobDetailsProps{
    jobDetails:JobDetails,
    isAccept?:boolean,
    InvitedJob?:string,
    jobId?:string,
    applicantId?:string,
}