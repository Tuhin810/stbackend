import mongoose, { Schema } from "mongoose";
import { MatchedApplicant } from "../../@types/interfaces/MatchedApplicant";
import JobModel from "../jobs/JobSchema";
import applicantModel from "../applicant/ApplicantSchema";

// model for new matched profile registration 

export const matchedApplicantSchema: Schema<MatchedApplicant> = new mongoose.Schema({
	applicantId: {
		type: mongoose.Schema.Types.ObjectId,
	},
	jobId: {
		type: String,
	},
	accept: {
		type: Boolean,
		default: false
	},
	status: {
		type: String,
		enum: ["applied", "matched", "hired", "rejected"],
		default: "matched"
	}
},
	{
		toJSON: { virtuals: true }
	}
);

matchedApplicantSchema.virtual("job_details", {
	ref: JobModel,
	localField: "jobId",
	foreignField: "_id",
	justOne: true,
	options: { lean: true }
});

matchedApplicantSchema.virtual("applicant_details", {
	ref: applicantModel,
	localField: "applicantId",
	foreignField: "_id",
	justOne: true,
	options: { lean: true }
});

const MatchedapplicantModel = mongoose.model<MatchedApplicant>("matchedApplicants", matchedApplicantSchema);

export default MatchedapplicantModel;