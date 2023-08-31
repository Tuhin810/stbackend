import mongoose, { Schema } from "mongoose";
import { IApplicantInvitedJobs } from "../../@types/interfaces/ApplicantInvitedJobs";

// model for store invited jobs 

const applicantInvitedJobSchema: Schema<IApplicantInvitedJobs> = new mongoose.Schema({
    applicantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "applicants"
    },
    jobId: {
        type: [String],
        default: []
    }
});

const applicantInvitedJobModel = mongoose.model<IApplicantInvitedJobs>("applicantInvitedJobs", applicantInvitedJobSchema);

export default applicantInvitedJobModel;