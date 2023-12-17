import { Request, Response } from "express";
import PlanModel from "../../../model/subscription_plans_list/subscription_plans_list_Schema";// Update the path accordingly

export const updateSubscriptionPricing = async (req: Request, res: Response) => {
	try {
		const { plan_name, details, job_limit, no_validity_dates, price } = req.body;

		console.log("Received data:", req.body);

		const newPlan = new PlanModel({
			plan_name,
			details,
			job_limit,
			no_validity_dates,
			price,
		});

		const savedPlan = await newPlan.save();

		res.status(201).json({ message: "Subscription pricing updated successfully", data: savedPlan });
	} catch (error) {
		console.error("Error updating subscription pricing:", error);
		res.status(500).json({ message: "Internal server error" });
	}
};
