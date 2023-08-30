import { ApplicantLoggedInDetails } from "../ApplicantLoggedInDetails";
import { ApplicantLoggedInAction } from "../actionTypes/ApplicantLoggedInAction";

export interface ApplicantState{ 
    applicantloggedinDetails:ApplicantLoggedInDetails,
    applicantDispatch:React.Dispatch<ApplicantLoggedInAction>
}