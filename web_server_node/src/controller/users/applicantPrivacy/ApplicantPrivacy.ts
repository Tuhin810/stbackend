import { Request, Response } from "express";
import { IApplicantPrivacy } from "../../../@types/interfaces/ApplicantPrivacy";
import { isApplicantProfilePrivate, isApplicantResumePrivate, updateApplicantProfileAndResumePrivacy } from "../../../service/applicant/applicant.service";

export const getApplicantProfilePrivacy = async (req: Request, res: Response) => {
	const applicantId = req.params.id;
	if (applicantId === undefined) {
		res.status(422).json({
			message: "data fields are missing"
		})
	}
	else {
		try {
			const response = await isApplicantProfilePrivate(applicantId);
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

export const getApplicantResumePrivacy = async (req: Request, res: Response) => {
	const applicantId = req.params.id;
	if (applicantId === undefined) {
		res.status(422).json({
			message: "data fields are missing"
		})
	}
	else {
		try {
			const response = await isApplicantResumePrivate(applicantId);
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
	const applicantPrivacy: IApplicantPrivacy = req.body;

	if (applicantId === undefined || !applicantPrivacy) {
		res.status(422).json({
			message: "data fields are missing"
		})
	}
	else {
		try {
			const response = await updateApplicantProfileAndResumePrivacy(applicantId, applicantPrivacy);
			if (response) {
				res.status(200).json({
					message: "data updated successfully",
					data: response
				})
			}
			else {
				res.status(207).json({
					message: "data updated successfully,but failed to get data",
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