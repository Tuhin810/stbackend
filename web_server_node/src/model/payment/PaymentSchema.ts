import mongoose, { Schema } from "mongoose";
import { PaymentPackages } from "../../@types/interfaces/PaymentDetails";

// model for new company registration 

export const PaymentSchema: Schema<PaymentPackages> = new mongoose.Schema({
	package_name: {
		type: String,

	},
	price: {
		type: Number,

	},


});

const PaymentModel = mongoose.model<PaymentPackages>("paymentOptions", PaymentSchema);

export default PaymentModel;