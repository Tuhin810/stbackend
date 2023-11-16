import { Request, Response } from "express";
import { getApplicantDetailsByJob, getApplicantDetailsByJobmatched } from "../../../service/jobs/job.service";
import MatchedapplicantModel from "../../../model/matchedApplicant/MatchedApplicant";

export const matchedApplicantstatus = async (req: Request, res: Response) => {
	const jobId: string = req.params.jobId;
	const newStatus: string = req.params.status;

	if (jobId === undefined || !newStatus) {
		res.status(422).send({
			success: false,
			message: "job id or status is missing"
		});
	} else {
		try {
			const response = await getApplicantDetailsByJobmatched(jobId, newStatus);
			if (response) {

				if (["applied", "matched", "hired", "rejected"].includes(newStatus)) {

					await MatchedapplicantModel.updateOne({ jobId }, { status: newStatus });

					res.status(200).json({
						success: true,
						message: "Applicant status updated successfully",
						data: response
					});
				} else {
					res.status(400).json({
						success: false,
						message: "Invalid status value"
					});
				}
			}
		} catch (error) {
			res.status(500).json({
				success: false,
				message: "Error in server",
				error
			});
		}
	}
}
