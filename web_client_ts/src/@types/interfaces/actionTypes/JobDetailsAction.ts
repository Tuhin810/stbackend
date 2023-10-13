import { JobDetails } from "../JobDetails";

export interface JobDetailsListAction{
    type:string,
    payload:JobDetails[]
}