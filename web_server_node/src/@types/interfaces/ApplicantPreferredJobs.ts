import mongoose from "mongoose";

export interface ApplicantPreferredJob {
	applicant_id: string;
	preferred_job: string
}