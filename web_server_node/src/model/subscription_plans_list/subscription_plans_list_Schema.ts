import mongoose, { Schema } from "mongoose";
import { PlanPricing } from "../../@types/interfaces/PlanDetails";

// model for new company registration 

export const PlantModel: Schema<PlanPricing> = new mongoose.Schema({
	plan_name: {
		type: String,
	},
	details: {
		type: String,
	},
	job_limit: {
		type: Number,
	},
	no_validity_dates: {
		type: Number,
	},
	price: {
		type: Number,
	}

});

const PlanModel = mongoose.model<PlanPricing>("Subscription_Plan_Options", PlantModel);

export default PlanModel;