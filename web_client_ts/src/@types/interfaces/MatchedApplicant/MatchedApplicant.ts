import { ApplicantDetails } from "../../ApplicantDetails";

export interface IMatchedApplicantDetails{
    accept:boolean,
    applicant_details:ApplicantDetails,
    applicantId:string,
    jobId:string
}