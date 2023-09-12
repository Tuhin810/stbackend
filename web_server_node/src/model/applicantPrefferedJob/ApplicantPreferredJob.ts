import mongoose, { Schema } from "mongoose";
import { ApplicantPreferredJob } from "../../@types/interfaces/ApplicantPreferredJobs";
import ApplicantModel from "../applicant/ApplicantSchema";
// model for new matched profile registration 

export const applicantPreferredJobSchema: Schema<ApplicantPreferredJob> = new mongoose.Schema({
	applicant_id: {
		type: String,
	},
	preferred_job: {
		type: String,
		required: [true, "preferred job can not be blank"]
	}
},
	{
		toJSON: { virtuals: true }
	}
);

applicantPreferredJobSchema.virtual("applicant_details", {
	ref: ApplicantModel,
	localField: "applicant_id",
	foreignField: "_id",
	justOne: true,
	options: { lean: true }
});

const ApplicantPreferreJobModel = mongoose.model<ApplicantPreferredJob>("applicantPreferredJobs", applicantPreferredJobSchema);

export default ApplicantPreferreJobModel;