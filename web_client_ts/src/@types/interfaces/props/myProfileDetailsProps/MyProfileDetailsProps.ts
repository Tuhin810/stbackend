import { ApplicantDetails } from "../../../ApplicantDetails";

export interface MyProfileDetailsProps{
    defaultApplicantDetails?:ApplicantDetails,
    componentRef?:React.LegacyRef<HTMLDivElement>,
    count?:number
}