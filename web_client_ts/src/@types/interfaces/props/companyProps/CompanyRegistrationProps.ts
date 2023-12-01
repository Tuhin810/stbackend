import { Dispatch, SetStateAction } from "react";
import { CompanyDetails } from "../../../CompanyDetails";

export interface CompanyRegistrationProps{
    companyDetails:CompanyDetails;
    setCompanyDetails:Dispatch<SetStateAction<CompanyDetails>>;
    handleChangeCompanyDetails:(event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>)=>void;
    errors?:any,
    emailError?:any
}