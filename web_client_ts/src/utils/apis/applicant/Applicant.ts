import { ApplicantDetails } from "../../../@types/ApplicantDetails";
import { ApplicantEducation } from "../../../@types/interfaces/ApplicantEducation";
import { ApplicantExperience } from "../../../@types/interfaces/ApplicantExp";
import { Otpload } from "../../../@types/otpDetails";
import { header } from "../../../configs/config"
import { Get, Put, Patch, Post } from "../apiCall"

export const getApplicantDetailsById = async (applicantId: string) => {
    const response = await Get(`applicant/getApplicantDetailsById/${applicantId}`, header);
    return response;
}

export const verifyOtpforapplicant =async (otpload:Otpload) => {
    const response = await Post('applicant/verifyuserotp',otpload,header);
    return response;
}


export const updateApplicantDetailsById = async (applicantId: string,applicantDetails:ApplicantDetails) => {
    const response = await Patch(`applicant/updateApplicantProfile/${applicantId}`,applicantDetails, header);
    return response;
}

export const updateApplicantSkills =async (applicantId:string,skillList:string[]) => {
    const response = await Put(`applicant/updateApplicantSkills/${applicantId}`,skillList,header);
    return response;
}

export const editApplicantSkills =async (applicantId:string,skillList:string[]) => {
    const response = await Put(`/applicant/editApplicantSkills/${applicantId}`,skillList,header);
    return response;
}

export const updateApplicantEducation =async (applicantId:string,applicantEducation:ApplicantEducation) => {
    const response = await Put(`applicant/updateApplicantEducation/${applicantId}`,applicantEducation,header);
    return response;
}
export const updateApplicantExperience =async (applicantId:string,applicantExp:ApplicantExperience) => {
    const response = await Put(`applicant/updateApplicantExperience/${applicantId}`,applicantExp,header);
    return response;
}

export const getApplicantInvitedJobList =async (applicantId:string) => {
    const response = await Get(`applicant/getApplicantInvitedJobDetailsList/${applicantId}`,header);
    return response;
}

export const getApplicantAppliedJobList =async (applicantId:string) => {
    const response = await Get(`applicant/getApplicantAcceptedJobList/${applicantId}`,header);
    return response;
}

export const getApplicantProfilePrivacy =async (applicantId:string) => {
    const response = await Get(`applicant/getApplicantProfilePrivacy/${applicantId}`,header);
    return response;
}

export const getApplicantResumePrivacy =async (applicantId:string) => {
    const response = await Get(`applicant/getApplicantResumePrivacy/${applicantId}`,header);
    return response;
}

export const updateApplicantPrivacy =async (applicantId:string,applicantResumeVisibilty:number) => {
    const response = await Patch(`applicant/updateApplicantPrivacy/${applicantId}/${applicantResumeVisibilty}`,{},header);
    return response;
}

export const applyJob =async (jobId:string,applicantId:string) => {
    const response = await Post(`applicant/applyJob/${jobId}/${applicantId}`,{},header);
    return response;
}