import { RecruiterSignupDetails } from "../../../@types/RecruiterSignupDetails";
import { header } from "../../../configs/apiConfig";
import { Get, Post } from "../apiCall";

export const registerRecruiter =async (recruiterSignupDetails:RecruiterSignupDetails) => {
    const response = await Post('recruiter/auth/register',recruiterSignupDetails,header);
    return response;
}

export const getJobsByRecruiter =async (recruiterId:string) => {
    const response = await Get(`jobs/getJobByRecruiterId/${recruiterId}`,header);
    return response;
}