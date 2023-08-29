import { header } from "../../../configs/apiConfig"
import { Get } from "../apiCall"

export const getApplicantDetailsById = async (applicantId: string) => {
    const response = await Get(`applicant/getApplicantDetailsById/${applicantId}`, header);
    return response;
}