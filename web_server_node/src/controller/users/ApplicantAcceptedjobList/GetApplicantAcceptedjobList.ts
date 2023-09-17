import { Request, Response } from "express";
import { getApplicantAcceptedJobListService } from "../../../service/applicant/applicant.service";

export const getApplicantAcceptedJobList = async (req: Request, res: Response) => {
	const applicantId: string = req.params.id;
	if (applicantId === undefined) {
		res.status(422).send({
			success: false,
			message: "fields are empty"
		})
	}
	else {
		try {
			const response = await getApplicantAcceptedJobListService(applicantId);
			// const acceptedJobList=await data.findOne({email:dataemail})
			if (response) {
				if (response)
					if (response.length !== 0) {
						res.status(200).json({
							message: "fetched successfully",
							data: response
						})
					}
					else {
						res.status(404).send({
							message: "no invited jobs yet",
							data: response
						})
					}
			}
			else {
				res.status(404).send({
					message: "no invited jobs yet",
					data: response
				})
			}
		}
		catch (e) {
			res.status(500).send({
				success: false,
				message: "error in server"
			})
		}
	}
}