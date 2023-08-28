import ApplicantModel from "../../model/applicant/ApplicantSchema"

export const getApplicantDetails =async (applicantId:string) => {
    const response = await ApplicantModel.findById(applicantId);
    return response;
}