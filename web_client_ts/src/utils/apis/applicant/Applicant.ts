import { ApplicantDetails } from "../../../@types/ApplicantDetails";
import { ApplicantEducation } from "../../../@types/interfaces/ApplicantEducation";
import { header } from "../../../configs/apiConfig"
import { Get, Put, Patch } from "../apiCall"

export const getApplicantDetailsById = async (applicantId: string) => {
    const response = await Get(`applicant/getApplicantDetailsById/${applicantId}`, header);
    return response;
}


export const updateApplicantDetailsById = async (applicantId: string,applicantDetails:ApplicantDetails) => {
    const response = await Patch(`applicant/updateApplicantProfile/${applicantId}`,applicantDetails, header);
    return response;
}

export const updateApplicantSkills =async (applicantId:string,skill:string) => {
    const response = await Put(`applicant/updateApplicantSkills/${applicantId}/${skill}`,{},header);
    return response;
}

export const updateApplicantEducation =async (applicantId:string,applicantEducation:ApplicantEducation) => {
    const response = await Put(`applicant/updateApplicantEducation/${applicantId}`,applicantEducation,header);
    return response;
}

export const getApplicantInvitedJobList =async (applicantId:string) => {
    const response = await Get(`applicant/getApplicantInvitedJobDetailsList/${applicantId}`,header);
    return response;
}