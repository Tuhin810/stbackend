import { CompanyDetails } from "../../../@types/CompanyDetails";
import { JobsDetails } from "../../../@types/JobDetails";
import { header } from "../../../configs/apiConfig";
import { Get, Post } from "../apiCall";

const newJob = async (jobDetails:JobsDetails) => {
const resp= await Post('',jobDetails,header);
return resp;
}
export const getJobsByRecruiter =async (recruiterId:string) => {
    const response = await Get(`jobs/getJobByRecruiterId/${recruiterId}`,header);
    return response;
}