import { InvitedJob } from "./InvitedJobList";

export interface InvitedAcceptedJobDetailsList{ 
    isInvitedFetched:boolean,
    isAcceptedFetched:boolean,
    invitedJobList:InvitedJob[],
    acceptedJobList:InvitedJob[],
}