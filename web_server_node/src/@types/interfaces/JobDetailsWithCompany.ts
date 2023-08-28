import { CompanyDetails } from "./CompanyDetails";
import { JobPostDetails } from "./JobPostDetails";
import { RecruiterSignUp } from "./RecruiterSignup";

export interface JobDetails{
    jobDetails:JobPostDetails,
    companyDetails:CompanyDetails,
    recruiterDetails:RecruiterSignUp
}