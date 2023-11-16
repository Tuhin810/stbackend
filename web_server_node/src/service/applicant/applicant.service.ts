import { ApplicantDetails } from "../../@types/interfaces/ApplicantDetails";
import { ApplicantQualification } from "../../@types/interfaces/ApplicantEducation";
import applicantModel from "../../model/applicant/ApplicantSchema"
import { IApplicantPrivacy } from "../../@types/interfaces/ApplicantPrivacy";
import mongoose, { FilterQuery } from "mongoose";
import { MatchedApplicant } from "../../@types/interfaces/MatchedApplicant";
import MatchedapplicantModel from "../../model/matchedApplicant/MatchedApplicant";
import JobModel from "../../model/jobs/JobSchema";
import ApplicantPreferreJobModel from "../../model/applicantPrefferedJob/ApplicantPreferredJob";
import { ApplicantPreferredJob } from "../../@types/interfaces/ApplicantPreferredJobs";
import { encryptPass, isEmail, isPasswordMatched } from "../commonFunction/CommonFunctions";
import { ApplicantExperience } from "../../@types/interfaces/ApplicantExperience";

export const registerNewApplicant = async (applicantDetails: ApplicantDetails) => {
    try {
        const hashPass = await encryptPass(applicantDetails.password!);
        if (hashPass != undefined) {
            applicantDetails.password = hashPass
            const response: ApplicantDetails = await applicantModel.create(applicantDetails);
            return response;
        }
    }
    catch (error) {
        throw error;
    }
}

export const googleLogin = async (email: string) => {
    try {
        const response = await applicantModel.findOne({ email: email });
        return response;
    }
    catch (error) {
        throw error;
    }
}

export const loginExistingUser = async (userId: string | number, password: string) => {
    try {
        let response;
        if (!isEmail(userId)) {
            response = await applicantModel.findOne({ email: userId });
        }
        else {
            response = await applicantModel.findOne({ phone: userId });
        }
        const isPassMatched = await isPasswordMatched(password, response?.password || "")

        if (isPassMatched) {
            return response;
        }
        else return null;
    }
    catch (error) {
        throw error;
    }
}

export const getApplicantDetails = async (applicantId: string) => {
    try{
        const response = await applicantModel.findById(applicantId);
        return response;
    }catch(error){
        throw error;
    }
}

export const getApplicantDetailsByEmail = async (email: string) => {
    try{
        const response = await applicantModel.findOne({ email: email });
        return response;
    }catch(error){
        throw error;
    }
}

export const updateApplicantQualification = async (applicantId: string, applicantQualification: ApplicantQualification) => {
    try{
        await applicantModel.updateOne(
            { _id: applicantId },
            { $push: { qualification_to_search: applicantQualification.qualification } }
        )
        await applicantModel.updateOne(
            { _id: applicantId },
            { $push: { qualification_details: applicantQualification } },
        )
        const applicantdetails = await getApplicantDetails(applicantId);
        return applicantdetails;
    }catch(error){
        throw error;
    }
}

export const updateApplicantExperience = async (applicantId: string, applicantExperience: ApplicantExperience) => {
    try{
        await applicantModel.updateOne(
            { _id: applicantId },
            { $push: { experience_details: applicantExperience } },
        )
        const applicantdetails = await getApplicantDetails(applicantId);
        return applicantdetails;
    }catch(error){
        throw error;
    }
}

export const updateApplicantSkill = async (applicantId: string, skillList: string[]) => {
    try{
        await applicantModel.updateOne(
            { _id: applicantId },
            { $push: { skills: { $each: skillList } } }
        )
    
        const applicantdetails = await getApplicantDetails(applicantId);
        return applicantdetails;
    }catch(error){
        throw error;
    }
}

export const deleteApplicantSkill = async (applicantId: string, skill: string) => {
    try{
        await applicantModel.deleteOne(
            { _id: applicantId },
            { $set: { skills: skill } },
        )
    
        const applicantdetails = await getApplicantDetails(applicantId);
        return applicantdetails;
    }catch(error){
        throw error
    }
}

export const getApplicantInvitedJobListService = async (applicantId: string) => {
    try{
        const response = (await MatchedapplicantModel.find({ applicantId: applicantId }).lean().populate("job_details").exec());
        return response;
    }catch(error){
        throw error;
    }
}

export const updateApplicantProfileDetailsById = async (applicantId: string, applicantProfile: ApplicantDetails) => {
    try {
        await applicantModel.updateOne(
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
                    native_language: applicantProfile.native_language,
                    is_disabled: applicantProfile.is_disabled,
                    facebook_link: applicantProfile.facebook_link,
                    github_link: applicantProfile.github_link,
                    linkedin_link: applicantProfile.linkedin_link
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

export const updateApplicantProfileAndResumePrivacy = async (applicantId: string, applicantResumePrivacy: number) => {
    try {
        await applicantModel.updateOne(
            { _id: applicantId },
            {
                $set:
                {
                    resume_visibilty_status: applicantResumePrivacy
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

export const getApplicantResumeVisibility = async (applicantId: string) => {
    try {
        const response = await applicantModel.findOne({ _id: applicantId }, { resume_visibilty_status: 1, _id: 0 });
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
        accept: false,
        status: "matched"
    }
    try {
        const isApplicantAlreadyMatched = await getIsApplicantAlreadyMatched(matchedApplicant);
        if (!isApplicantAlreadyMatched) {
            try {
                MatchedapplicantModel.create(matchedApplicant);
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
        const response = await MatchedapplicantModel.findOne({
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
        const result = await MatchedapplicantModel.findOne(queryToFindApplicantAndJob);
        const response = await MatchedapplicantModel.updateOne(
            queryToFindApplicantAndJob,
            { $set: { accept: true } }
        )
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
        const no_of_applicants: number = await MatchedapplicantModel.countDocuments({
            $and: [
                { jobId: jobId },
                { accept: true }
            ]
        })
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
        const response = await MatchedapplicantModel.find({ applicantId: applicantId, accept: true }).lean().populate("job_details").exec();
        return response;
    }
    catch (error) {
        throw error;
    }
}

// export const forgottenPassword =async (phone:type) => {
    
// }
