import { RecruiterDetails } from "../../../@types/RecruiterDetails";
import { UserCredentials } from "../../../@types/UserCredential";
import { header } from "../../../configs/apiConfig";
import { Get, Post } from "../apiCall";

export const registerRecruiter =async (recruiterSignupDetails:RecruiterDetails) => {
    const response = await Post('recruiter/auth/register',recruiterSignupDetails,header);
    return response;
}
export const LoginRecruiter =async (recruiterLoginDetails:UserCredentials) => {
    const response = await Post('recruiter/auth/login',recruiterLoginDetails,header);
    return response;
}

export const getJobsByRecruiter =async (recruiterId:string) => {
    const response = await Get(`jobs/getJobByRecruiterId/${recruiterId}`,header);
    return response;
}