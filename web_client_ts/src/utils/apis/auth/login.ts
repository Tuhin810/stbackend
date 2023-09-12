import { ApplicantDetails } from "../../../@types/ApplicantDetails";
import { UserCredentials } from "../../../@types/UserCredential";
import { header } from "../../../configs/apiConfig";
import { Post } from "../apiCall";

export const applicantSignIn = async (userCredential: UserCredentials) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await Post('applicant/login', userCredential, header);
        console.log("response1", response)
        return response;
    } catch (err) {
        throw err;
    }
}

export const applicantSignUp = async (applicantDetails: ApplicantDetails) => {
    const response = await Post("applicant/register", applicantDetails, header);
    return response;
}