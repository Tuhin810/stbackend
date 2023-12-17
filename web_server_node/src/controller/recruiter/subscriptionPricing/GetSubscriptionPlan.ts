
import { Request, Response } from "express";
import PlanModel from "../../../model/subscription_plans_list/subscription_plans_list_Schema";
// import mongoose from "mongoose";
export const getSubscriptionPricing = async (req: Request, res: Response) => {
	try {
		const subscriptionPlans = await PlanModel.find({});
		res.status(200).json({ message: "Subscription plans fetched succesfully", data: subscriptionPlans });
	} catch (error) {
		console.error("Error showing subscription:", error);
		res.status(500).json({ message: "Internal server error" });
	}
};