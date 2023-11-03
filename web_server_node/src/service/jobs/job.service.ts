/* eslint-disable @typescript-eslint/no-non-null-assertion */
import mongoose, { FilterQuery } from "mongoose";
import { JobPostDetails } from "../../@types/interfaces/JobPostDetails";
import JobModel from "../../model/jobs/JobSchema";
import { ApplicantDetails } from "../../@types/interfaces/ApplicantDetails";
import ApplicantModel from "../../model/applicant/ApplicantSchema";
import { sendInviteApplicantList } from "../applicant/applicant.service";
import MatchedApplicantModel from "../../model/matchedApplicant/MatchedApplicant";
import ApplicantPreferreJobModel from "../../model/applicantPrefferedJob/ApplicantPreferredJob";

export const postNewJob = async (jobDetails: JobPostDetails) => {
    try {
        const data = await JobModel.create(jobDetails);
        return data;
    }
    catch (error) {
        throw error;
    }
}

export const getJobsByRecruiterId = async (recruiterId: string) => {
    try {
        const jobList: JobPostDetails[] = await JobModel.find({ job_poster_id: recruiterId }).lean();
        return jobList;
    }
    catch (error) {
        throw error;
    }
}

export const getJobsByCompanyId = async (companyId: string) => {
    try {
        const jobList: JobPostDetails[] = await JobModel.find({ company_id: companyId })
        return jobList;
    }
    catch (error) {
        throw error;
    }
}

export const matchedJobApplicants = async (jobId: string) => {
    try {
        const response = await getJobDetailsByJobId(jobId)!;
        if (response) {
            const jobDetails: JobPostDetails = response;
            let applicantList: mongoose.Schema.Types.ObjectId[];

            if (jobDetails.gender != "all") {
                const queryToFindApplicant: FilterQuery<ApplicantDetails> = {
                    $and: [
                        { gender: jobDetails.gender },
                        { birth_year: { $gt: new Date().getFullYear() - jobDetails.max_age_limit - 1 } },
                        { birth_year: { $lt: new Date().getFullYear() - jobDetails.min_age_limit + 1 } },
                        { experience_year: { $lt: jobDetails.max_experience_year } },
                        { experience_year: { $gt: jobDetails.min_experience_year } },
                        { spoken_english: jobDetails.spoken_english_level },
                        { qualification_to_search: jobDetails.qualification },
                        { skills: { $all: jobDetails.mandatory_skills } }
                    ]
                }
                applicantList = await ApplicantModel.find(queryToFindApplicant, { _id: 1 });
            }
            else {
                const queryToFindApplicant: FilterQuery<ApplicantDetails> = {
                    $and: [
                        { birth_year: { $gt: new Date().getFullYear() - jobDetails.max_age_limit - 1 } },
                        { birth_year: { $lt: new Date().getFullYear() - jobDetails.min_age_limit + 1 } },
                        { experience_year: { $lt: jobDetails.max_experience_year } },
                        { experience_year: { $gt: jobDetails.min_experience_year } },
                        { spoken_english: jobDetails.spoken_english_level },
                        { qualification_to_search: jobDetails.qualification },
                        { skills: { $all: jobDetails.mandatory_skills } }
                    ]
                }
                applicantList = await ApplicantModel.find(queryToFindApplicant, { _id: 1 });
            }
            await sendInviteApplicantList(applicantList, jobDetails._id!);
            await updateMatchedApplicantNumbers(jobDetails._id!);
            const matchedApplicantDetails = await getMatchedApplicantDetails(jobDetails._id!);
            return matchedApplicantDetails;
        }
    }
    catch (error) {
        throw error;
    }
    return [];
}

const updateMatchedApplicantNumbers = async (jobId: string) => {
    try {
        const matchedApplicantNumber: number = await MatchedApplicantModel.countDocuments({ jobId: jobId })
        if (matchedApplicantNumber) {
            await JobModel.updateOne(
                { _id: jobId },
                { $set: { no_of_matched_profiles: matchedApplicantNumber } }
            )
        }
    }
    catch (error) {
        throw error;
    }
}

const getMatchedApplicantDetails = async (jobId: string) => {
    try {
        const matchedApplicantDetails = await MatchedApplicantModel.find({ jobId: jobId }).lean().populate("applicant_details").exec();
        return matchedApplicantDetails;
    }
    catch (error) {
        throw error;
    }
}

export const deleteJobDetailsByJobId = async (jobId: string) => {
    try {
        const response = await JobModel.findByIdAndDelete(jobId)
        return response;
    }
    catch (error) {
        throw error;
    }
}

export const searchApplicantByPreferredJobName = async (job: string) => {
    try {
        const response = await ApplicantPreferreJobModel.find({ preferred_job: job }).lean().populate("applicant_details").exec();
        return response;
    }
    catch (error) {
        throw error;
    }
}

export const getJobDetailsByJobId = async (jobId: string) => {
    try {
        const jobDetails = await JobModel.findById(jobId);
        return jobDetails;
    }
    catch (error) {
        throw error
    }
}

export const getApplicantDetailsByJob = async (jobId: string) => {
    try {
        const response = await MatchedApplicantModel.find({ jobId: jobId }).lean().populate("applicant_details").exec();
        return response;
    }
    catch (error) {
        throw error;
    }
}

export const getApplicantDetailsByJobmatched = async (jobId: string, status: string) => {
    try {
        const response = await MatchedApplicantModel.find({ jobId: jobId }).lean().populate("applicant_details").exec();
        return response;
    }
    catch (error) {
        throw error;
    }
}


export const allJobs = async () => {
    try {
        const response = await JobModel.find({}).lean().populate("company_details").populate("recruiter_details").exec();
        return response;
    }
    catch (error) {
        throw error;
    }
}

export const getMatchedJobDetailsService = async (jobId: string, applicant_id: string) => {
    try {
        const response = await MatchedApplicantModel.findOne({ jobId: jobId, applicantId: applicant_id });
        return response;
    }
    catch (error) {
        throw error;
    }
}

export const updateJobStatus = async (jobId: string, applicant_id: string, status: string) => {
    try {
        await MatchedApplicantModel.updateOne(
            { jobId: jobId, applicantId: applicant_id },
            {
                $set: {
                    status: status
                }
            }
        )
    }
    catch (error) {
        throw error;
    }
}

