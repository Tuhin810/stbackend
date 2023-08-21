import { header } from "../../../configs/apiConfig";
import { Get } from "../apiCall";

export const getCompanyList = async () => {
    const response = await Get('company/getAllCompany', header);
    return response;
}

export const getJobsByCompany =async (companyId:string) => {
    const response = await Get(`jobs/getJobByCompanyId/${companyId}`,header);
    return response;
}