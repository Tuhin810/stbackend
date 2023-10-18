import { Request, Response } from "express";
import { updateApplicantExperience } from "../../../service/applicant/applicant.service";
import { ApplicantExperience } from "../../../@types/interfaces/ApplicantExperience";

export const updateExperience = async (req: Request, res: Response) => {
	const applicantId = req.params.id!;
	const applicantExperience: ApplicantExperience = req.body;
	if (applicantId === undefined || !applicantExperience) {
		res.status(422).send({
			success: false,
			messsage: "fields are empty"
		})
	}
	try {
		const response = await updateApplicantExperience(applicantId, applicantExperience);
		if (response) {
			res.status(200).send({
				success: true,
				message: "experience details is successfully updated",
				data: response
			})
		}
	}
	catch (e) {
		res.status(500).send({
			success: false,
			message: "error in server",
			error: e
		})
	}

}