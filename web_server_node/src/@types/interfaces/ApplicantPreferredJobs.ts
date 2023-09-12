import mongoose from "mongoose";

export interface ApplicantPreferredJob {
	applicant_id: mongoose.Schema.Types.ObjectId;
	preferred_job: string
}