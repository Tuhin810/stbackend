import { InvitedAcceptedJobDetailsList } from "../../@types/interfaces/InvitedAppliedJobDetailsList";
import { InvitedAcceptedJobDetailsListAction } from "../../@types/interfaces/actionTypes/InvitedAcceptedJobAction";

const setInvitedAcceptedJobDetailsList = (jodDetailsList: InvitedAcceptedJobDetailsList, action: InvitedAcceptedJobDetailsListAction): InvitedAcceptedJobDetailsList => {
    switch (action.type) {
        case "invited":
            return {
                ...jodDetailsList,
                isInvitedFetched: true,
                invitedJobList: action.payload
            };
        case "accepted":
            return{
                ...jodDetailsList,
                isAcceptedFetched:true,
                acceptedJobList:action.payload
            }
        default:
            return {} as InvitedAcceptedJobDetailsList

    }
}


export { setInvitedAcceptedJobDetailsList as InvitedAcceptedJobDetailsListReducer }