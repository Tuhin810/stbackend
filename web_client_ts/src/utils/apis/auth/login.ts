import { UserCredentials } from "../../../@types/UserCredential";
import { header } from "../../../configs/apiConfig";
import { Post } from "../apiCall";

export const signIn = async (userCredential: UserCredentials) => {
    const response = await Post('user/auth/login', userCredential, header);
    return response;
}