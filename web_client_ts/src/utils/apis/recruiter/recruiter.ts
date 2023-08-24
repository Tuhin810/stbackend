import { RecruiterLoginDetails } from "../../../@types/RecruiterLoginDEtails";
import { RecruiterSignupDetails } from "../../../@types/RecruiterDetails";
import { header } from "../../../configs/apiConfig";
import { Get, Post } from "../apiCall";

export const registerRecruiter =async (recruiterSignupDetails:RecruiterSignupDetails) => {
    const response = await Post('recruiter/auth/register',recruiterSignupDetails,header);
    return response;
}
export const LoginRecruiter =async (recruiterLoginDetails:RecruiterLoginDetails) => {
    const response = await Post('recruiter/auth/login',recruiterLoginDetails,header);
    return response;
}

export const getJobsByRecruiter =async (recruiterId:string) => {
    const response = await Get(`jobs/getJobByRecruiterId/${recruiterId}`,header);
    return response;
}