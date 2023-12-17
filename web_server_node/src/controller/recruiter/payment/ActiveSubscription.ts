import { Request, Response } from "express";
import recruiterModel from "../../../model/recruiter/RecruiterSchema";
import PlanModel from "../../../model/subscription_plans_list/subscription_plans_list_Schema";
import mongoose from "mongoose";
import SubscriptionHistoryModel from "../../../model/PlanHistory/PlanHistory";
// import mongoose from "mongoose";
export const activateSubscription = async (req: Request, res: Response) => {
	try {
		const { recruiterId, subscriptionPlanId } = req.body;

		if (!recruiterId || !subscriptionPlanId) {
			return res.status(400).json({ message: "Recruiter ID and Subscription Plan ID are required 🖊️" });
		}

		const recruiter = await recruiterModel.findById(recruiterId);
		const subscriptionPlan = await PlanModel.findById(subscriptionPlanId);

		if (!recruiter || !subscriptionPlan) {
			return res.status(404).json({ message: "Recruiter or Subscription Plan not found 👍" });
		}
		recruiter.subscription = true;
		recruiter.activated = true;
		recruiter.job_limit += subscriptionPlan.job_limit
		recruiter.subscription_plan_object_id = subscriptionPlan._id;
		recruiter.current_Plan = subscriptionPlan.plan_name
		await recruiter.save();

		//finction to record subscription history
		const subscriptionHistory = new SubscriptionHistoryModel({
			recruiterId: new mongoose.Types.ObjectId(recruiterId),
			planName: subscriptionPlan.plan_name,
			planPrice: subscriptionPlan.price,
		});

		// Save the subscription history to the database
		await subscriptionHistory.save();
		res.status(200).json({ message: "Subscription activated successfully 🥳", data: recruiter });
	} catch (error) {
		console.error("Error activating subscription: 😭", error);
		res.status(500).json({ message: "Internal server error 😭" });
	}
};