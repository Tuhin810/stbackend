import { Request, Response } from "express";
import { applyjob } from "../../../service/applicant/applicant.service";

export const applicantApplyJob = async (req: Request, res: Response) => {
	const applicantId = req.params.applicantId;
	const jobId = req.params.jobId;
	if (applicantId === undefined || jobId === undefined) {
		res.status(422).json({
			message: "fields are empty"
		})
	}
	else {
		try {
			const response = await applyjob(jobId, applicantId);
			if (response) {
				res.status(200).json({
					message: "applied successfully"
				})
			}
		}
		catch (error) {
			res.status(500).json({
				message: "error in server"
			})
		}
	}
}