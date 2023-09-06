import mongoose from "mongoose";
export interface MatchedApplicant {
    jobId: mongoose.Schema.Types.ObjectId,
    applicantId: mongoose.Schema.Types.ObjectId,
    accept: boolean
}