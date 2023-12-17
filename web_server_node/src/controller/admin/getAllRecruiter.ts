
import { Request, Response } from "express";
import recruiterModel from "../../model/recruiter/RecruiterSchema";

export const getAllRecruiters = async (req: Request, res: Response) => {
	const subscription_plan_object_id:string = req.body
	try {
		const subscriptionPlans = await recruiterModel.find({"subscription":true});
		res.status(200).json({ message: "Recruiter list fetched succesfully", data: subscriptionPlans });
	} catch (error) {
		console.error("Error fetching recruiters:", error);
		res.status(500).json({ message: "Internal server error" });
	}
};
