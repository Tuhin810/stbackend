import { ApplicantDetails } from "../../../ApplicantDetails";

export interface IApplicantSignUpProps{
    applicantDetails:ApplicantDetails,
    handleChangeApplicantDetails:(event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>)=>void;
    passwordError?:boolean
}