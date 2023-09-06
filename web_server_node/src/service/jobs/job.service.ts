import mongoose, { FilterQuery } from "mongoose";
import { JobPostDetails } from "../../@types/interfaces/JobPostDetails";
import JobModel from "../../model/jobs/JobSchema";
import { ApplicantDetails } from "../../@types/interfaces/ApplicantDetails";
import ApplicantModel from "../../model/applicant/ApplicantSchema";
import { sendInviteApplicantList } from "../applicant/applicant.service";

export const postNewJob = async (jobDetails: JobPostDetails) => {
    const data = await JobModel.create(jobDetails);
    return data;
}

export const getJobsByRecruiterId = async (recruiterId: string) => {
    const jobList: JobPostDetails[] = await JobModel.find({ job_poster_id: recruiterId })
    return jobList;
}

export const getJobsByCompanyId = async (companyId: string) => {
    const jobList: JobPostDetails[] = await JobModel.find({ company_id: companyId })
    return jobList;
}


export const matchedJobApplicants = async (jobDetails: JobPostDetails): Promise<JobPostDetails> => {
    if (jobDetails.gender != "all") {
        const queryToFindApplicant: FilterQuery<ApplicantDetails> = {
            $and: [
                { gender: jobDetails.gender },
                { age: { $lt: jobDetails.max_age_limit } },
                { age: { $gt: jobDetails.min_age_limit } },
                { experience_year: { $lt: jobDetails.max_experience_year } },
                { experience_year: { $gt: jobDetails.min_experience_year } },
                { spoken_english: jobDetails.spoken_english_level },
                { min_expected_salary: { $lt: jobDetails.max_salary } },
                { min_duty_hours: { $gt: jobDetails.duty_hours } },
                { qualification_to_search: jobDetails.qualification },
                { skills: { $all: jobDetails.mandatory_skills } }
            ]
        }
        const applicantList: mongoose.Schema.Types.ObjectId[] = await ApplicantModel.find(queryToFindApplicant, { _id: 1 });
        await pushApplicantstoMatchedApplicantList(jobDetails._id!, applicantList);
        await sendInviteApplicantList(applicantList, jobDetails._id!);
    }
    else {
        const queryToFindApplicant: FilterQuery<ApplicantDetails> = {
            $and: [
                { gender: jobDetails.gender },
                { age: { $gt: jobDetails.min_age_limit } },
                { experience_year: { $lt: jobDetails.max_experience_year } },
                { experience_year: { $gt: jobDetails.min_experience_year } },
                { spoken_english: jobDetails.spoken_english_level },
                { min_expected_salary: { $lt: jobDetails.max_salary } },
                { min_duty_hours: { $gt: jobDetails.duty_hours } },
                { qualification_to_search: jobDetails.qualification },
                { skills: { $all: jobDetails.mandatory_skills } }
            ]
        }
        const applicantList: mongoose.Schema.Types.ObjectId[] = await ApplicantModel.find(queryToFindApplicant, { _id: 1 });
        await pushApplicantstoMatchedApplicantList(jobDetails._id!, applicantList);
        await sendInviteApplicantList(applicantList, jobDetails._id!);
    }
    const postJobDetails = await getJobDetailsByJobId(jobDetails._id!);
    if (postJobDetails) {
        return postJobDetails;
    }
    return {} as JobPostDetails;
}

export const getJobDetailsByJobId = async (jobId: mongoose.Schema.Types.ObjectId) => {
    const response = await JobModel.findById(jobId).populate("company_id").exec();
    return response;
}
export const deleteJobDetailsByJobId = async (jobId: string) => {
    const response = await JobModel.findByIdAndDelete(jobId)
    return response;
}

const pushApplicantstoMatchedApplicantList = async (jobId: mongoose.Schema.Types.ObjectId, matched_applicant_list: mongoose.Schema.Types.ObjectId[]) => {
    await JobModel.updateOne(
        { _id: jobId },
        { $push: { matched_applicant_list: { $each: matched_applicant_list } } }
    )
}