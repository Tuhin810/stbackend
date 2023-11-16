import { header } from "../../../configs/config";
import { Post } from "../apiCall";

export const applicantForgetPassword = async (phone: string) => {
    const response = await Post(`applicant/forgetPassword/${phone}`, {}, header);
    return response;
}