import { JobPostDetails } from "../../JobPostDetails";

export interface JobDetailsListAction{
    type:string,
    payload:JobPostDetails[]
}