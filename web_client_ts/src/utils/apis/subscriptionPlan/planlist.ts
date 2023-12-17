import { header } from "../../../configs/config";
import { Get, Post } from "../apiCall";

export const getPlanList = async () => {
    const response = await Get(`/subscription/GetPlans`, header);
    return response;
}