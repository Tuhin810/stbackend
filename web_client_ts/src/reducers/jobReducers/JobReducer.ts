import { JobPostDetails } from "../../@types/JobPostDetails";
import { JobDetailsList } from "../../@types/interfaces/JobDetailsList";
import { JobDetailsListAction } from "../../@types/interfaces/actionTypes/JobDetailsAction";

const setJobDetailsList = (jodDetailsList: JobDetailsList, action: JobDetailsListAction): JobDetailsList => {
    switch (action.type) {
        case "fetched":
            return {
                ...jodDetailsList,
                isFetched: true,
                jobList: action.payload
            };
        case "postJob":
            return{
                ...jodDetailsList,
                isFetched:true,
                jobList:action.payload
            }
        default:
            return {} as JobDetailsList

    }
}


export { setJobDetailsList as JobDetailsListReducer }