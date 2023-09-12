import mongoose, { Schema } from "mongoose";
import { MatchedApplicant } from "../../@types/interfaces/MatchedApplicant";
import JobModel from "../jobs/JobSchema";
import ApplicantModel from "../applicant/ApplicantSchema";

// model for new matched profile registration 

export const matchedApplicantSchema: Schema<MatchedApplicant> = new mongoose.Schema({
	applicantId: {
		type: mongoose.Schema.Types.ObjectId,
	},
	jobId: {
		type: mongoose.Schema.Types.ObjectId,
	},
	accept: {
		type: Boolean,
		default: false
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
	ref: ApplicantModel,
	localField: "applicantId",
	foreignField: "_id",
	justOne: true,
	options: { lean: true }
});

const MatchedApplicantModel = mongoose.model<MatchedApplicant>("matchedApplicants", matchedApplicantSchema);

export default MatchedApplicantModel;