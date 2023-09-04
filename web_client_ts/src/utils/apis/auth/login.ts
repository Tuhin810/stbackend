import { ApplicantDetails } from "../../../@types/ApplicantDetails";
import { UserCredentials } from "../../../@types/UserCredential";
import { header } from "../../../configs/apiConfig";
import { Post } from "../apiCall";

export const applicantSignIn = async (userCredential: UserCredentials) => {
    const response = await Post('applicant/login', userCredential, header);
    return response;
}

export const applicantSignUp = async (applicantDetails:ApplicantDetails) => {
    const response = await Post("applicant/register",applicantDetails,header);
    return response;
}