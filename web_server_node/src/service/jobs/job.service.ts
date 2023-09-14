/* eslint-disable @typescript-eslint/no-non-null-assertion */
import mongoose, { FilterQuery } from "mongoose";
import { JobPostDetails } from "../../@types/interfaces/JobPostDetails";
import JobModel from "../../model/jobs/JobSchema";
import { ApplicantDetails } from "../../@types/interfaces/ApplicantDetails";
import ApplicantModel from "../../model/applicant/ApplicantSchema";
import { sendInviteApplicantList } from "../applicant/applicant.service";
import MatchedApplicantModel from "../../model/matchedApplicant/MatchedApplicant";
import ApplicantPreferreJobModel from "../../model/applicantPrefferedJob/ApplicantPreferredJob";
import { JobDetails } from "../../@types/interfaces/JobDetailsWithCompany";
import { OAS3Options } from "swagger-jsdoc";

export const postNewJob = async (jobDetails: JobPostDetails) => {
    const data = await JobModel.create(jobDetails);
    return data;
}

export const getJobsByRecruiterId = async (recruiterId: string) => {
    const jobList: JobPostDetails[] = await JobModel.find({ job_poster_id: recruiterId }).lean();
    return jobList;
}

export const getJobsByCompanyId = async (companyId: string) => {
    const jobList: JobPostDetails[] = await JobModel.find({ company_id: companyId })
    return jobList;
}


export const matchedJobApplicants = async (jobId: string) => {
    const response = await getJobDetailsByJobId(jobId)!;
    console.log(response);
    if (response) {
        const jobDetails: JobPostDetails = response;
        console.log("r");

        if (jobDetails.gender != "all") {
            const queryToFindApplicant: FilterQuery<ApplicantDetails> = {
                $and: [
                    { gender: jobDetails.gender },
                    { age: { $lt: jobDetails.max_age_limit } },
                    { age: { $gt: jobDetails.min_age_limit } },
                    { experience_year: { $lt: jobDetails.max_experience_year } },
                    { experience_year: { $gt: jobDetails.min_experience_year } },
                    { spoken_english: jobDetails.spoken_english_level },
                    { qualification_to_search: jobDetails.qualification },
                    { skills: { $all: jobDetails.mandatory_skills } }
                ]
            }
            const applicantList: mongoose.Schema.Types.ObjectId[] = await ApplicantModel.find(queryToFindApplicant, { _id: 1 });
            await sendInviteApplicantList(applicantList, jobDetails._id!);
        }
        else {
            const queryToFindApplicant: FilterQuery<ApplicantDetails> = {
                $and: [
                    { age: { $lt: jobDetails.max_age_limit } },
                    { age: { $gt: jobDetails.min_age_limit } },
                    { experience_year: { $lt: jobDetails.max_experience_year } },
                    { experience_year: { $gt: jobDetails.min_experience_year } },
                    { spoken_english: jobDetails.spoken_english_level },
                    { qualification_to_search: jobDetails.qualification },
                    { skills: { $all: jobDetails.mandatory_skills } }
                ]
            }
            const applicantList: mongoose.Schema.Types.ObjectId[] = await ApplicantModel.find(queryToFindApplicant, { _id: 1 });
            console.log("list", applicantList);
            await sendInviteApplicantList(applicantList, jobDetails._id!);
        }
        const postJobDetails = await getJobDetailsByJobId(jobId);
        await updateMatchedApplicantNumbers(jobDetails._id!);
        if (postJobDetails) {
            return postJobDetails;
        }
    }
    else {
        console.log("noe");
    }
    return {} as JobPostDetails;
}

const updateMatchedApplicantNumbers = async (jobId: string) => {
    const matchedApplicantNumber: number = await MatchedApplicantModel.countDocuments({ jobId: jobId })
    if (matchedApplicantNumber) {
        await JobModel.updateOne(
            { _id: jobId },
            { $set: { no_of_matched_profiles: matchedApplicantNumber } }
        )
    }
}

export const getJobDetailsByJobId = async (jobId: string) => {
    console.log(jobId);
    const response = await JobModel.findById(jobId);
    console.log(response);
    return response;
}
export const deleteJobDetailsByJobId = async (jobId: string) => {
    const response = await JobModel.findByIdAndDelete(jobId)
    return response;
}

export const searchApplicantByPreferredJobName = async (job: string) => {
    const response = await ApplicantPreferreJobModel.find({ preferred_job: job }).lean().populate("applicant_details").exec();
    return response;
}