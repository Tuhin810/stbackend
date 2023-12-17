
// import { Response } from "express";
// import recruiterModel from "../../model/recruiter/RecruiterSchema";

// export const deleteRecruiter = async (res: Response, req: Request) => {
// 	try {
// 		const recruiterId = req.body;

// 		const existingRecruiter = await recruiterModel.findById(recruiterId);

// 		if (!existingRecruiter) {
// 			return res.status(404).json({ message: "Employer not found" });
// 		} else {
// 			await existingRecruiter.deleteOne();
// 			return res.status(200).json({ message: "Employer account deleted successfully" });
// 		}

// 	} catch (error) {
// 		console.error("Error deleting Employer account:", error);
// 		res.status(500).json({ message: "Internal server error" });
// 	}

// }


import { Request, Response } from "express";
import recruiterModel from "../../model/recruiter/RecruiterSchema";
// import PlanModel from "../../../model/subscription_plans_list/subscription_plans_list_Schema";

export const deleteRecruiter = async (req: Request, res: Response) => {
	try {
		const recruiterId = req.body;

		const existingPlan = await recruiterModel.findById(recruiterId);
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
