import { Request, Response } from "express";
import PlanModel from "../../../model/subscription_plans_list/subscription_plans_list_Schema";

export const deleteSubscriptionPricing = async (req: Request, res: Response) => {
	try {
		const planId = req.body;

		const existingPlan = await PlanModel.findById(planId);
		if (!existingPlan) {
			return res.status(404).json({ message: "Plan not found" });
		}
		await existingPlan.deleteOne();

		res.json({ message: "Subscription pricing deleted successfully" });
	} catch (error) {
		console.error("Error deleting subscription pricing:", error);
		res.status(500).json({ message: "Internal server error" });
	}
};
