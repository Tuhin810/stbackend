import mongoose from "mongoose";

export interface PaymentPackages {
	paymentPlanId: mongoose.Schema.Types.ObjectId;
	package_name: string,
	price: number,
	package_type: string,
	no_of_job_post: number,
	package_detaiils: string,
}