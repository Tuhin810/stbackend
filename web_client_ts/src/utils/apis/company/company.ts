import { CompanyDetails } from "../../../@types/CompanyDetails";
import { header } from "../../../configs/apiConfig";
import { Get, Post } from "../apiCall";

export const getCompanyList = async () => {
    const response = await Get('company/getAllCompany', header);
    return response;
}
export const getJobsByCompany =async (companyId:string) => {
    const response = await Get(`jobs/getJobByCompanyId/${companyId}`,header);
    return response;
}
export const registerNewCompany = async (companyDetails:CompanyDetails) => {
    const response = await Post(`company/register`,companyDetails,header);
    return response;
}