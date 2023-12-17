import { Request, Response } from "express";
import PlanModel from "../../../model/subscription_plans_list/subscription_plans_list_Schema";

export const deleteOntimeSubscriptionPricing = async (req: Request, res: Response) => {
	try {
		const { plan_name, details, job_limit, no_validity_dates, price, deletionDays } = req.body;

		console.log("Received data:", req.body);

		const newPlan = new PlanModel({
			plan_name,
			details,
			job_limit,
			no_validity_dates,
			price,
		});

		const savedPlan = await newPlan.save();

		// Schedule plan deletion after 2 minutes
		setTimeout(async () => {
			try {
				const deletedPlan = await PlanModel.findOneAndDelete({ _id: savedPlan._id });
				console.log("Subscription plan deleted:", deletedPlan);
			} catch (deleteError) {
				console.error("Error deleting subscription plan:", deleteError);
			}
		}, deletionDays * 60 * 1000); // 2 minutes in milliseconds

		res.status(200).json({ message: "Subscription pricing updated successfully", data: savedPlan });

	} catch (error) {
		console.error("Error updating subscription pricing:", error);
		res.status(500).json({ message: "Internal server error" });
	}
};
