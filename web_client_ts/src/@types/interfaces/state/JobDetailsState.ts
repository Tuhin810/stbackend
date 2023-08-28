import { JobDetailsList } from "../JobDetailsList"
import { JobDetailsListAction } from "../actionTypes/JobDetailsAction"

export interface JobDetailsState{ 
    jobDetailsListDetails:JobDetailsList,
    jobListDispatch:React.Dispatch<JobDetailsListAction>
}