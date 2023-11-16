import { CompanyDetails } from "../../../CompanyDetails";

export interface CompanyRegistrationProps2{
    companyDetails:CompanyDetails;
    handleChangeCompanyDetails:(event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>)=>void;
    stateList:string[]
}