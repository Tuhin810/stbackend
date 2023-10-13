import { JobDetails } from "./JobDetails";

export interface InvitedJob{
    _id: string,
    applicantId: string,
    jobId: string,
    accept: boolean,
    job_details:JobDetails
}