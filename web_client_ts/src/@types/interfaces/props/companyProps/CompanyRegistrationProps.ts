import { CompanyDetails } from "../../../CompanyDetails";

export interface CompanyRegistrationProps{
    companyDetails:CompanyDetails;
    handleChangeCompanyDetails:(event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>)=>void;
}