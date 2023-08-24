import { RecruiterDetails } from "../../RecruiterDetails";

export interface RecruiterLoggedInAction{
    type:string,
    payload:RecruiterDetails
}