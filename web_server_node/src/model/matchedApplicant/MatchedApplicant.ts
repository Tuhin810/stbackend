import mongoose, { Schema } from "mongoose";
import { MatchedApplicant } from "../../@types/interfaces/MatchedApplicant";

// model for new matched profile registration 

export const matchedApplicantSchema: Schema<MatchedApplicant> = new mongoose.Schema({
	applicantId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "applicants"
	},
	jobId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Jobs"
	},
	accept: {
		type: Boolean,
		default: false
	}
});

const MatchedApplicantModel = mongoose.model<MatchedApplicant>("matchedApplicants", matchedApplicantSchema);

export default MatchedApplicantModel;