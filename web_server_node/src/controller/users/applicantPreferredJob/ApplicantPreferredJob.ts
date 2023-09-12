import { Request, Response } from "express";
import { ApplicantPreferredJob } from "../../../@types/interfaces/ApplicantPreferredJobs";
import { addPreferredJob } from "../../../service/applicant/applicant.service";

export const postApplicantPreferredJob = async (req: Request, res: Response) => {
	const preferredJobDetails: ApplicantPreferredJob = req.body;
	if (!preferredJobDetails) {
		res.status(422).json({
			message: "fields are empty"
		})
	}
	else {
		try {
			const isAdded: boolean = await addPreferredJob(preferredJobDetails);
			if (isAdded) {
				res.status(200).send({
					message: "successfully added"
				})
			}
			else {
				res.status(409).send({
					message: "already added"
				})
			}
		}
		catch (error) {
			res.status(500).json({
				message: "error in server",
				error
			})
		}
	}
}