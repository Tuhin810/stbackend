import { ApplicantDetails } from "../../@types/interfaces/ApplicantDetails";
import { ApplicantQualification } from "../../@types/interfaces/ApplicantEducation";
import ApplicantModel from "../../model/applicant/ApplicantSchema"
import { IApplicantPrivacy } from "../../@types/interfaces/ApplicantPrivacy";
import mongoose, { FilterQuery } from "mongoose";
import { MatchedApplicant } from "../../@types/interfaces/MatchedApplicant";
import MatchedApplicantModel from "../../model/matchedApplicant/MatchedApplicant";
import JobModel from "../../model/jobs/JobSchema";
import ApplicantPreferreJobModel from "../../model/applicantPrefferedJob/ApplicantPreferredJob";
import { ApplicantPreferredJob } from "../../@types/interfaces/ApplicantPreferredJobs";

export const registerNewApplicant = async (applicantDetails: ApplicantDetails) => {
    const response: ApplicantDetails = await ApplicantModel.create(applicantDetails);
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

export const updateApplicantSkill = async (applicantId: string, skillList: string[]) => {
    await ApplicantModel.updateOne(
        { _id: applicantId },
        { $push: { skills: { $each: skillList } } }
    )

    const applicantdetails = await getApplicantDetails(applicantId);
    return applicantdetails;
}

export const deleteApplicantSkill = async (applicantId: string, skill: string) => {
    await ApplicantModel.deleteOne(
        { _id: applicantId },
        { $set: { skills: skill } },
    )

    const applicantdetails = await getApplicantDetails(applicantId);
    return applicantdetails;
}

export const getApplicantInvitedJobListService = async (applicantId: string) => {
    const response = (await MatchedApplicantModel.find({ applicantId: applicantId }).lean().populate("job_details").exec());
    return response;
}

export const updateApplicantProfileDetailsById = async (applicantId: string, applicantProfile: ApplicantDetails) => {
    try {
        await ApplicantModel.updateOne(
            { _id: applicantId },
            {
                $set:
                {
                    first_name: applicantProfile.first_name,
                    middle_name: applicantProfile.middle_name,
                    last_name: applicantProfile.last_name,
                    photo: applicantProfile.photo,
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
    catch (error) {
        throw error;
    }
}

export const updateApplicantProfileAndResumePrivacy = async (applicantId: string, applicantPrivacy: IApplicantPrivacy) => {
    try {
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
    catch (error) {
        throw error;
    }
}

export const isApplicantProfilePrivate = async (applicantId: string) => {
    try {
        const response = await ApplicantModel.findOne({ _id: applicantId }, { is_profile_public: 1, _id: 0 });
        return response;
    }
    catch (error) {
        throw error;
    }
}

export const isApplicantResumePrivate = async (applicantId: string) => {
    try {
        const response = await ApplicantModel.findOne({ _id: applicantId }, { is_resume_public: 1, _id: 0 });
        return response;
    }
    catch (error) {
        throw error;
    }
}


export const sendInviteApplicantList = async (matchedApplicantList: mongoose.Schema.Types.ObjectId[], jobId: string) => {
    for (const applicantId of matchedApplicantList) {
        await inviteApplicant(applicantId, jobId);
    }
}

const inviteApplicant = async (applicantId: mongoose.Schema.Types.ObjectId, jobId: string) => {
    const matchedApplicant: MatchedApplicant = {
        applicantId: applicantId,
        jobId: jobId,
        accept: false
    }
    try {
        const isApplicantAlreadyMatched = await getIsApplicantAlreadyMatched(matchedApplicant);
        if (!isApplicantAlreadyMatched) {
            try {
                MatchedApplicantModel.create(matchedApplicant);
            }
            catch (error) {
                throw error;
            }
        }
    }
    catch (error) {
        throw error;
    }
}

const getIsApplicantAlreadyMatched = async (matchedApplicant: MatchedApplicant) => {
    try {
        const response = await MatchedApplicantModel.findOne({
            $and: [
                { applicantId: matchedApplicant.applicantId },
                { jobId: matchedApplicant.jobId }
            ]
        })
        if (response) return true;
    }
    catch (error) {
        throw error;
    }
    return false;
}

export const applyjob = async (jobId: string, applicantId: string) => {
    try {
        const queryToFindApplicantAndJob: FilterQuery<MatchedApplicant> = {
            $and: [
                { applicantId: applicantId },
                { jobId: jobId }
            ]
        }
        const result = await MatchedApplicantModel.findOne(queryToFindApplicantAndJob);
        console.log("result", result);
        const response = await MatchedApplicantModel.updateOne(
            queryToFindApplicantAndJob,
            { $set: { accept: true } }
        )
        console.log(response);
        if (response.acknowledged) {
            await setAppliedJobNumber(jobId);
        }
        return response
    }
    catch (error) {
        throw error
    }
}

const setAppliedJobNumber = async (jobId: string) => {
    try {
        const no_of_applicants: number = await MatchedApplicantModel.countDocuments({
            $and: [
                { jobId: jobId },
                { accept: true }
            ]
        })
        console.log(no_of_applicants);
        await JobModel.updateOne(
            { _id: jobId },
            {
                $set: {
                    no_of_applicants: no_of_applicants
                }
            }
        )
    }
    catch (error) {
        throw error;
    }
}

export const addPreferredJob = async (applicantPreferredJob: ApplicantPreferredJob): Promise<boolean> => {
    try {
        const response = await ApplicantPreferreJobModel.findOne({
            $and: [
                { applicant_id: applicantPreferredJob.applicant_id },
                { preferred_job: applicantPreferredJob.preferred_job }
            ]
        })
        if (!response) {
            await ApplicantPreferreJobModel.create(applicantPreferredJob);
            return true;
        }
    }
    catch (error) {
        throw error;
    }
    return false;
}

export const getApplicantAcceptedJobListService = async (applicantId: string) => {
    try {
        const response = await MatchedApplicantModel.find({ applicantId: applicantId, accept: true }).lean().populate("job_details").exec();
        return response;
    }
    catch (error) {
        throw error;
    }
}