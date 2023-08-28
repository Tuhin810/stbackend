import { ApplicantDetails } from "../../ApplicantDetails";

export interface ApplicantLoggedInAction{
    type:string,
    payload:ApplicantDetails
}