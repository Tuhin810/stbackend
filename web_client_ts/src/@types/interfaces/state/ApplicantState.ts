import { ApplicantDetails } from "../../ApplicantDetails";
import { ApplicantLoggedInDetails } from "../ApplicantLoggedInDetails";
import { RecruiterLoggedInDetails } from "../RecruiterLoggedInDetails";
import { ApplicantLoggedInAction } from "../actionTypes/ApplicantLoggedInAction";

export interface ApplicantState{ 
    applicantloggedinDetails:ApplicantLoggedInDetails,
    applicantDispatch:React.Dispatch<ApplicantLoggedInAction>
}