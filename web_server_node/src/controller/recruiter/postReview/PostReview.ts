import { Request, Response } from "express";
import { postReviewToApplicantService } from "../../../service/Recruiter/RecruiterService";

export const postReviewToApplicant = async (req: Request, res: Response) => {
	try {
		const { applicantId, review } = req.body;
		if (!applicantId || !review) {
			return res.status(422).json({
				message: "Fields are Missing"
			})
		}
		const applicantDetails = await postReviewToApplicantService(applicantId, review);
		return res.status(200).json({
			message: "data posted successfully",
			data: applicantDetails
		})
	} catch (error) {
		return res.status(500).json({
			message: "error in server",
			error: error
		})
	}
}