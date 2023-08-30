import mongoose from "mongoose";
import { ApplicantDetails } from "../../@types/interfaces/ApplicantDetails";
import { ApplicantQualification, IApplicationEducationSchema } from "../../@types/interfaces/ApplicantEducation";
import ApplicantModel from "../../model/applicant/ApplicantSchema"

export const registerNewApplicant =async (applicantDetails:ApplicantDetails) => {
    const response :ApplicantDetails= await ApplicantModel.create(applicantDetails);
    return response;
}

export const getApplicantDetails =async (applicantId:string) => {
    const response = await ApplicantModel.findById(applicantId);
    return response;
}

export const updateApplicantQualification=async (applicantId:string,applicantQualification:ApplicantQualification) => {
    const response = await ApplicantModel.updateOne(
        {_id:applicantId},
        {$push:{qualification_to_search:applicantQualification.qualification}}
    )
    const response1= await ApplicantModel.updateOne(
        {_id:applicantId},
        {$push:{qualification_details:applicantQualification}},
    )
    const applicantdetails = await getApplicantDetails(applicantId);
    return applicantdetails;
}

export const updateApplicantSkill =async (applicantId:string,skill:string) => {
    const response = await ApplicantModel.updateOne(
        {_id:applicantId},
        {$push:{skills:skill}},
    )
    console.log('response',response);
    
    const applicantdetails = await getApplicantDetails(applicantId);
    return applicantdetails;
}