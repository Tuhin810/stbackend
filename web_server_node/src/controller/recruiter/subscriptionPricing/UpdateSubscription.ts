import { Request, Response } from "express";
import PlanModel from "../../../model/subscription_plans_list/subscription_plans_list_Schema";

export const editSubscriptionPricing = async (req: Request, res: Response) => {
	try {
		const { _id, plan_name, details, job_limit, no_validity_dates, price } = req.body;

		if (!_id) {
			return res.status(400).json({ message: "_id is required for updating a plan" });
		}

		const updatedPlan = await PlanModel.findByIdAndUpdate(
			_id,
			{
				plan_name,
				details,
				job_limit,
				no_validity_dates,
				price,
			},
			{ new: true }
		);
		if (!updatedPlan) {
			return res.status(404).json({ message: "Plan not found" });
		}

		res.status(200).json({ message: "Subscription pricing updated successfully", data: updatedPlan });
	} catch (error) {
		console.error("Error updating subscription pricing:", error);
		res.status(500).json({ message: "Internal server error" });
	}
};
