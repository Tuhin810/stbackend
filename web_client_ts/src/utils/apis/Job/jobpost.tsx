import { CompanyDetails } from "../../../@types/CompanyDetails";
import { JobsDetails } from "../../../@types/JobDetails";
import { header } from "../../../configs/apiConfig";
import { Post } from "../apiCall";

export const newJobPost = async (jobDetails: JobsDetails) => {
    const response = await Post('jobs/postjob', jobDetails, header);
    return response;
}