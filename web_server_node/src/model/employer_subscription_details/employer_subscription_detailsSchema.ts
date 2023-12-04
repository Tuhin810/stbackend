import mongoose, { Schema } from "mongoose";
import { IEmployerSubscriptionDetails } from "../../@types/interfaces/employer_subscription_details";
import recruiterModel from "../recruiter/RecruiterSchema";
import PlanModel from "../subscription_plans_list/subscription_plans_list_Schema";
import PaymentModel from "../payment/PaymentSchema";

export const employerSubscriptionSchema: Schema<IEmployerSubscriptionDetails> = new mongoose.Schema({
	employer_object_id: {
		type: mongoose.Schema.Types.ObjectId,
	},
	payment_id: {
		type: mongoose.Schema.Types.ObjectId,
	},
	plan_object_id: {
		type: mongoose.Schema.Types.ObjectId,
	},
	payment_time: {
		type: Number,
	},

},
	{
		toJSON: { virtuals: true }
	});

exports.employerSubscriptionSchema.virtual("employer_details", {
	ref: recruiterModel,
	localField: "employer_object_id",
	foreignField: "_id",
	justOne: true,
	options: { lean: true }
});

exports.employerSubscriptionSchema.virtual("plan_details", {
	ref: PlanModel,
	localField: "plan_object_id",
	foreignField: "_id",
	justOne: true,
	options: { lean: true }
});


const employerSubscriptionModel = mongoose.model<IEmployerSubscriptionDetails>("employer_subscription_details", employerSubscriptionSchema);

export default employerSubscriptionModel;