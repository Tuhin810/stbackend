import { UserCredentials } from "../../../@types/UserCredential";
import { header } from "../../../configs/apiConfig";
import { Post } from "../apiCall";
import { UserDetails } from '../../../@types/UserDetails';
import { log } from "console";
import { SignupDetails } from "../../../@types/SignupDetails";


export const signUp = async (signupDetails: SignupDetails): Promise<any> => {
    const response: any = await Post('regester', signupDetails, header)
    return response;
}