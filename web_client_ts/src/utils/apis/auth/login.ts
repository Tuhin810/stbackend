import { UserCredentials } from "../../../@types/UserCredential";
import { header } from "../../../configs/apiConfig";
import { Post } from "../apiCall";
import { UserDetails } from '../../../@types/UserDetails';
import { log } from "console";


export const signIn = async (userCredential: UserCredentials): Promise<any> => {
    const response: any = await Post('login', userCredential, header)
    return response;
}