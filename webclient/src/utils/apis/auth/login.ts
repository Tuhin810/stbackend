import { UserCredentials } from "../../../@types/UserCredential";
import { header } from "../../../configs/apiConfig";
import { Post } from "../apiCall";
import { UserDetails } from '../../../@types/UserDetails';

export const signIn = async (userCredential: UserCredentials) => {
    const response = await Post('login', userCredential, header);
    return response;
}