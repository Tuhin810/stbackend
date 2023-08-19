import mongoose from "mongoose";
import { JobsDetails } from "../../@types/interfaces/JobsDetails";
import JobModel from "../../model/jobs/JobSchema";

export const postNewJob = async (jobDetails: JobsDetails) => {
    const data = await JobModel.create(jobDetails);
    return data;
}

export const getJobsByRecruiterId =async (recruiterId:string) => {
    const jobList:JobsDetails[] = await JobModel.find({job_poster_id:recruiterId})
    return jobList;
}

export const getJobsByCompanyId =async (companyId:string) => {
    const jobList:JobsDetails[] = await JobModel.find({company_id:companyId})
    return jobList;
}