import { InvitedAcceptedJobDetailsList } from "../InvitedAppliedJobDetailsList"
import { InvitedAcceptedJobDetailsListAction } from "../actionTypes/InvitedAcceptedJobAction"

export interface InvitedAcceptedJobDetailsState{ 
    invitedAppliedJobDetailsListDetails:InvitedAcceptedJobDetailsList,
    invitedAppliedJobListDispatch:React.Dispatch<InvitedAcceptedJobDetailsListAction>
}