import { CompanyList } from "../../../CompanyList";

export interface IRecruiterSignupProps{
    companyList?:CompanyList[],
    handleChnageRecruiterDetails: (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void,
    passwordError?:boolean,
    emailError?:boolean,
    handleChangeOtp?:(otp:string)=>void,
    errors?:any
}