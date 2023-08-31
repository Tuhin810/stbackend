import mongoose from "mongoose";

export interface IApplicantInvitedJobs{
    applicantId:mongoose.Schema.Types.ObjectId,
    jobId:string[]
}