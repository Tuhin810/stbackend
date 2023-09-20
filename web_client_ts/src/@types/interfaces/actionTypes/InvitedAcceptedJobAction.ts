import { InvitedJob } from "../InvitedJobList";

export interface InvitedAcceptedJobDetailsListAction{
    type:string,
    payload:InvitedJob[]
}