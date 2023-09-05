import { ApplicantDetails } from "../../@types/interfaces/ApplicantDetails";
import { ApplicantQualification } from "../../@types/interfaces/ApplicantEducation";
import ApplicantModel from "../../model/applicant/ApplicantSchema"
import applicantInvitedJobModel from "../../model/applicantInvitedjobs/ApplicantInvitedJobs";
import { IApplicantInvitedJobs } from "../../@types/interfaces/ApplicantInvitedJobs";
import { getJobDetailsByJobId } from "../jobs/job.service";
import { JobPostDetails } from "../../@types/interfaces/JobPostDetails";
import { IApplicantPrivacy } from "../../@types/interfaces/ApplicantPrivacy";

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
    const response = await ApplicantModel.findOne({ email: email });
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
    const jobDetailsList: JobPostDetails[] = [];
    if (response) {
        const jobList = response!.jobId;
        for (const jobId of jobList) {
            const jobDetailsResponse = await getJobDetailsByJobId(jobId);
            console.log("job details response", jobDetailsResponse);
            if (jobDetailsResponse) {
                const jobDetails: JobPostDetails = jobDetailsResponse as JobPostDetails
                jobDetailsList.push(jobDetails);

            }
        }
    }
    console.log("job details list", jobDetailsList);
    return jobDetailsList;
}

export const updateApplicantProfileDetailsById = async (applicantId: string, applicantProfile: ApplicantDetails) => {
    await ApplicantModel.updateOne(
        { _id: applicantId },
        {
            $set:
            {
                first_name: applicantProfile.first_name,
                middle_name: applicantProfile.middle_name,
                last_name: applicantProfile.last_name,
                current_address: applicantProfile.current_address,
                permanent_address: applicantProfile.permanent_address,
                gender: applicantProfile.gender,
                birth_year: applicantProfile.birth_year,
                profile_bio: applicantProfile.profile_bio,
                phone: applicantProfile.phone,
                state: applicantProfile.state,
                country: applicantProfile.country,
                pin: applicantProfile.state,
                age: applicantProfile.age,
                experience_year: applicantProfile.experience_year,
                spoken_english: applicantProfile.spoken_english,
                is_fresher: applicantProfile.is_fresher,
                min_expected_salary: applicantProfile.min_expected_salary,
                min_duty_hours: applicantProfile.min_duty_hours,
                native_language: applicantProfile.min_duty_hours,
                is_disabled: applicantProfile.is_disabled,
            }
        }
    )
    const applicantDetails = await getApplicantDetails(applicantId);
    return applicantDetails;
}

export const updateApplicantProfileAndResumePrivacy = async (applicantId: string, applicantPrivacy: IApplicantPrivacy) => {
    await ApplicantModel.updateOne(
        { _id: applicantId },
        {
            $set:
            {
                is_profile_public: applicantPrivacy.is_profile_public,
                is_resume_public: applicantPrivacy.is_resume_public
            }
        }
    )
    const response = await getApplicantDetails(applicantId);
    return response;
}

export const isApplicantProfilePrivate = async (applicantId: string) => {
    const response = await ApplicantModel.findOne({ _id: applicantId }, { is_profile_public: 1, _id: 0 });
    return response;
}

export const isApplicantResumePrivate = async (applicantId: string) => {
    const response = await ApplicantModel.findOne({ _id: applicantId }, { is_resume_public: 1, _id: 0 });
    return response;
}