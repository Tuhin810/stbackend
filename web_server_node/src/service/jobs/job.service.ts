import mongoose, { FilterQuery, Query } from "mongoose";
import { JobPostDetails } from "../../@types/interfaces/JobPostDetails";
import JobModel from "../../model/jobs/JobSchema";
import { ApplicantDetails } from "../../@types/interfaces/ApplicantDetails";
import ApplicantModel from "../../model/applicant/ApplicantSchema";
import CompanyModel from "../../model/company/CompanySchema";
import { IMatchedApplicant } from "../../@types/interfaces/MatchedApplicant";
import applicantInvitedJobModel from "../../model/applicantInvitedjobs/ApplicantInvitedJobs";

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


export const matchedJobApplicants = async (jobDetails: JobPostDetails):Promise<IMatchedApplicant[]> => {
    if (jobDetails.gender != "all") {
        const queryToFindApplicant: FilterQuery<ApplicantDetails> = {
            $and: [
                { gender: jobDetails.gender },
                { age: { $lt: jobDetails.age_limit } },
                { experience_year: { $gt: jobDetails.experience_year } },
                { spoken_english: jobDetails.spoken_english_level },
                { is_fresher: jobDetails.is_fresher_allowed },
                { min_expected_salary: { $lt: jobDetails.salary } },
                { min_duty_hours: { $gt: jobDetails.duty_hours } },
                { qualification_to_search: jobDetails.qualification },
                { skills: { $all: jobDetails.skills } }
            ]
        }
        const applicantList:IMatchedApplicant[] = await ApplicantModel.find(queryToFindApplicant,{first_name:1,middle_name:1,last_name:1,_id:1});
        await sendInviteApplicantList(applicantList,jobDetails._id!);
        return applicantList;
    }
    else {
        const queryToFindApplicant: FilterQuery<ApplicantDetails> = {
            $and: [
                { age: { $lt: jobDetails.age_limit } },
                { experience_year: { $gt: jobDetails.experience_year } },
                { spoken_english: jobDetails.spoken_english_level },
                { is_fresher: jobDetails.is_fresher_allowed },
                { min_expected_salary: { $lt: jobDetails.salary } },
                { min_duty_hours: { $gt: jobDetails.duty_hours } },
                { qualification_to_search: jobDetails.qualification },
                { skills: { $all: jobDetails.skills } }
            ]
        }
        const applicantList:IMatchedApplicant[] = await ApplicantModel.find(queryToFindApplicant,{first_name:1,middle_name:1,last_name:1,email:1});
        await sendInviteApplicantList(applicantList,jobDetails._id!);
        return applicantList;
    }
}

const sendInviteApplicantList = async (matchedApplicantList:IMatchedApplicant[],jobId:string) => {
    for(let applicant of matchedApplicantList){
        await inviteApplicant(applicant._id,jobId);
    }
}

const inviteApplicant =async (applicantId:mongoose.Schema.Types.ObjectId,jobid:string) => {
    const response = await applicantInvitedJobModel.updateOne(
        {applicantId:applicantId},
        {$push:{jobId:jobid}}
    )
    return response;
}

export const getJobDetailsByJobId =async (jobId:string) => {
    const response = await JobModel.findById(jobId).populate('company_id').exec();;
    return response;
}
export const deleteJobDetailsByJobId =async (jobId:string) => {
    const response = await JobModel.findByIdAndDelete(jobId)
    return response;
}