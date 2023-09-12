import { JobPostDetails } from "../JobPostDetails";

export interface InvitedJob{
    _id: string,
    applicantId: string,
    jobId: string,
    accept: boolean,
    job_details:JobPostDetails
}