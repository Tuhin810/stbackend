import mongoose from "mongoose";
import { ApplicantDetails } from "../../@types/interfaces/ApplicantDetails";
import { ApplicantQualification, IApplicationEducationSchema } from "../../@types/interfaces/ApplicantEducation";
import ApplicantModel from "../../model/applicant/ApplicantSchema"
import applicantInvitedJobModel from "../../model/applicantInvitedjobs/ApplicantInvitedJobs";
import { IApplicantInvitedJobs } from "../../@types/interfaces/ApplicantInvitedJobs";
import { JobDetails } from "../../@types/interfaces/JobDetailsWithCompany";
import { getJobDetailsByJobId } from "../jobs/job.service";
import { JobPostDetails } from "../../@types/interfaces/JobPostDetails";

export const registerNewApplicant = async (applicantDetails: ApplicantDetails) => {
    const response: ApplicantDetails = await ApplicantModel.create(applicantDetails);
    if (response) {
        const applicantInvitedJobs: IApplicantInvitedJobs = {
            applicantId: response?._id!,
            jobId: []
        }
        const response1 = await applicantInvitedJobModel.create(applicantInvitedJobs);
    }
    return response;
}

export const getApplicantDetails = async (applicantId: string) => {
    const response = await ApplicantModel.findById(applicantId);
    return response;
}

export const updateApplicantQualification = async (applicantId: string, applicantQualification: ApplicantQualification) => {
    const response = await ApplicantModel.updateOne(
        { _id: applicantId },
        { $push: { qualification_to_search: applicantQualification.qualification } }
    )
    const response1 = await ApplicantModel.updateOne(
        { _id: applicantId },
        { $push: { qualification_details: applicantQualification } },
    )
    const applicantdetails = await getApplicantDetails(applicantId);
    return applicantdetails;
}

export const updateApplicantSkill = async (applicantId: string, skill: string) => {
    const response = await ApplicantModel.updateOne(
        { _id: applicantId },
        { $push: { skills: skill } },
    )

    const applicantdetails = await getApplicantDetails(applicantId);
    return applicantdetails;
}

export const getApplicantInvitedJobListService = async (applicantId: string) => {
    const response = await applicantInvitedJobModel.findOne({ applicantId: applicantId });
    const jobDetailsList:JobPostDetails[]=[];
    if (response) {
        console.log(response);
        
        const jobList = response!.jobId;
        for (let jobId of jobList) {
            const jobDetailsResponse=await getJobDetailsByJobId(jobId);
            console.log('job details response',jobDetailsResponse);
            if(jobDetailsResponse){
                const jobDetails:JobPostDetails=jobDetailsResponse as JobPostDetails
                jobDetailsList.push(jobDetails);
                
            }
        }
    }
    console.log('job details list',jobDetailsList);
    return jobDetailsList;

}