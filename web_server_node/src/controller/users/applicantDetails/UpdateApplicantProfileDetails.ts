import { Request, Response } from "express";
import { updateApplicantProfileDetailsById } from "../../../service/applicant/applicant.service";
import { ApplicantDetails } from "../../../@types/interfaces/ApplicantDetails";

export const updateApplicntProfileDetails = async (req: Request, res: Response) => {
	const applicantId = req.params.id;
	const applicantProfileDetails: ApplicantDetails = req.body;
	if (applicantId === undefined || !applicantProfileDetails) {
		res.status(422).json(
			{
				message: "fields are empty",
			}
		)
	}
	else {
		try {
			const response = await updateApplicantProfileDetailsById(applicantId, applicantProfileDetails);
			if (response) {
				res.status(200).json(
					{
						message: "profile updated successfully",
						data: response
					}
				)
			}
			else {
				res.status(207).json(
					{
						message: "updadted but get failed",
						data: response
					}
				)
			}
		}
		catch (error) {
			res.status(500).json(
				{
					message: "error in server",
					error
				}
			)
		}
	}
}