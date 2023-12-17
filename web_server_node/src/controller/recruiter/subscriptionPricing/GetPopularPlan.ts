import SubscriptionHistoryModel from "../../../model/PlanHistory/PlanHistory";
import { Request, Response } from "express";

export const findMostUsedPlan = async (req: Request, res: Response) => {
	try {
		const mostUsedPlan = await SubscriptionHistoryModel.aggregate([
			{
				$group: {
					_id: "$planName",
					count: { $sum: 1 },
				},
			},
			{
				$sort: { count: -1 },
			},
			{
				$limit: 1,
			},
		]);

		if (mostUsedPlan.length > 0) {
			return res.status(200).json({ message: "popular plan found 🫡", data: mostUsedPlan[0]._id });
		} else {
			console.log("No data found in subscription history");
			return { status: 404, message: "Not Found: No data found in subscription history" };
		}
	} catch (error) {
		console.error("Error finding most used plan:", error);
		return { status: 500, message: "Internal Server Error: Error finding most used plan" };
	}
};
