import { Request, Response } from "express";
import { getApplicantResumeVisibility, updateApplicantProfileAndResumePrivacy } from "../../../service/applicant/applicant.service";


export const getApplicantResumePrivacy = async (req: Request, res: Response) => {
	const applicantId = req.params.id;
	if (applicantId === undefined) {
		res.status(422).json({
			message: "data fields are missing"
		})
	}
	else {
		try {
			const response = await getApplicantResumeVisibility(applicantId);
			if (response) {
				res.status(200).json({
					message: "data updated successfully",
					data: response
				})
			}
			else {
				res.status(404).json({
					message: "the applicant id is not exist",
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

export const updateApplicantPrivacy = async (req: Request, res: Response) => {
	const applicantId = req.params.id;
	const resume_visibilty_status = req.params.visibilty;

	console.log(resume_visibilty_status);

	if (applicantId === "undefined" || resume_visibilty_status === "undefined") {
		res.status(422).json({
			message: "data fields are missing"
		})
	}
	else {
		try {
			const response = await updateApplicantProfileAndResumePrivacy(applicantId, Number(resume_visibilty_status));
			if (response) {
				res.status(200).json({
					message: "resume privacy updated successfully",
					data: response
				})
			}
			else {
				res.status(207).json({
					message: "resume privacy updated successfully,but failed to get data",
					data: response
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