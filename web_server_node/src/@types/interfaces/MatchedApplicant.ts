import mongoose from "mongoose";
export interface MatchedApplicant {
    jobId: string,
    applicantId: mongoose.Schema.Types.ObjectId,
    accept: boolean,
    status: string
}