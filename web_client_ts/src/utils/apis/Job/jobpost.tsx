import { JobPostDetails } from "../../../@types/JobPostDetails";
import { header } from "../../../configs/apiConfig";
import { Get, Post } from "../apiCall";

export const newJobPost = async (jobDetails: JobPostDetails) => {
    const response = await Post('jobs/postjob', jobDetails, header);
    return response;
}

export const getJobDetailsByJobId =async (jobId:string) => {
    const response = await Get(`jobs/getJobByJobId/${jobId}`,header)
    return response;
}

export const brodcastJob =async (jobId:string) => {
    const response = await Post(`job/brodcast/${jobId}`,{},header);
    return response;
}

export const getMatchedApplicantList =async (jobId:string) => {
    const response = await Get(`jobs/getMatchedProfileListByJobId/${jobId}`,header);
    return response;
}