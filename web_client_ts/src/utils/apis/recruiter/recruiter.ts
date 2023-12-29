import { RecruiterDetails } from "../../../@types/RecruiterDetails";
import { UserCredentials } from "../../../@types/UserCredential";
import { Otpload } from "../../../@types/otpDetails";
import { paymentinfoDetails } from "../../../@types/paymentDetails";
import { header } from "../../../configs/config";
import { Get, Post } from "../apiCall";

export const registerRecruiter =async (recruiterSignupDetails:RecruiterDetails) => {
    const response = await Post('recruiter/auth/register',recruiterSignupDetails,header);
    return response;
}
export const LoginRecruiter =async (recruiterLoginDetails:UserCredentials) => {
    const response = await Post('recruiter/auth/login',recruiterLoginDetails,header);
    return response;
}

export const paymentbyStrapi =async (paymentinfo:paymentinfoDetails) => {
    const response = await Post('api/create-checkout-session',paymentinfo,header);
    return response;
}

export const verifyOtp =async (otpload:Otpload) => {
    const response = await Post('recruiter/varifyotp',otpload,header);
    return response;
}


export const getJobsByRecruiter =async (recruiterId:string) => {
    const response = await Get(`jobs/getJobByRecruiterId/${recruiterId}`,header);
    return response;
}
