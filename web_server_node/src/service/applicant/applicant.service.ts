import { ApplicantDetails } from "../../@types/interfaces/ApplicantDetails";
import { ApplicantQualification } from "../../@types/interfaces/ApplicantEducation";
import ApplicantModel from "../../model/applicant/ApplicantSchema"
import applicantInvitedJobModel from "../../model/applicantInvitedjobs/ApplicantInvitedJobs";
import { IApplicantInvitedJobs } from "../../@types/interfaces/ApplicantInvitedJobs";
import { getJobDetailsByJobId } from "../jobs/job.service";
import { JobPostDetails } from "../../@types/interfaces/JobPostDetails";
import { IApplicantProfileDetails } from "../../@types/interfaces/ApplicantProfileDetails";

export const registerNewApplicant = async (applicantDetails: ApplicantDetails) => {
    const response: ApplicantDetails = await ApplicantModel.create(applicantDetails);
    if (response) {
        const applicantInvitedJobs: IApplicantInvitedJobs = {
            applicantId: response?._id!,
            jobId: []
        }
        await applicantInvitedJobModel.create(applicantInvitedJobs);
    }
    return response;
}

export const getApplicantDetails = async (applicantId: string) => {
    const response = await ApplicantModel.findById(applicantId);
    return response;
}

export const getApplicantDetailsByEmail = async (email: string) => {
    const response = await ApplicantModel.findOne({email:email});
    return response;
}

export const updateApplicantQualification = async (applicantId: string, applicantQualification: ApplicantQualification) => {
    await ApplicantModel.updateOne(
        { _id: applicantId },
        { $push: { qualification_to_search: applicantQualification.qualification } }
    )
    await ApplicantModel.updateOne(
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
        const jobList = response!.jobId;
        for (const jobId of jobList) {
            const jobDetailsResponse=await getJobDetailsByJobId(jobId);
            console.log("job details response",jobDetailsResponse);
            if(jobDetailsResponse){
                const jobDetails:JobPostDetails=jobDetailsResponse as JobPostDetails
                jobDetailsList.push(jobDetails);
                
            }
        }
    }
    console.log("job details list",jobDetailsList);
    return jobDetailsList;
}

export const updateApplicantProfileDetailsById =async (applicantId:string,applicantProfile:IApplicantProfileDetails) => {
    await ApplicantModel.updateOne(
        {_id:applicantId},
        {
            $set:
            {
                first_name:applicantProfile.first_name,
                middle_name:applicantProfile.middle_name,
                last_name:applicantProfile.last_name,
                current_address:applicantProfile.current_address,
                permanent_address:applicantProfile.permanent_address,
                gender:applicantProfile.gender,
                birth_year:applicantProfile.birth_year
            }
        }
    )
    const applicantDetails = await getApplicantDetails(applicantId);
    return applicantDetails;
}

// export const updateApplicantAdditionalDetails 