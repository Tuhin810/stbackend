import mongoose, { Schema } from "mongoose";
import { PaymentPackages } from "../../@types/interfaces/PaymentDetails";

// model for new company registration 

export const PaymentSchema: Schema<PaymentPackages> = new mongoose.Schema({
	package_name: {
		type: String,
		required: [true, "package name can not be blank"]
	},
	price: {
		type: Number,
		required: [true, "price can not be blank"]
	},
	package_type: {
		type: String,
		enum: ["monthly", "yearly"],
		required: [true, "pacakge type can not be blank"]
	},
	no_of_job_post: {
		type: Number,
		required: [true, "job post can not be blank"]
	},
	package_detaiils: {
		type: String,
		required: [true, "package details can not be blank"]
	}

});

const PaymentModel = mongoose.model<PaymentPackages>("paymentOptions", PaymentSchema);

export default PaymentModel;