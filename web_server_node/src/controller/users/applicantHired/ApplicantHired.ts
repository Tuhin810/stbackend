import { Request, Response } from "express";
import { getApplicantDetailsByJob } from "../../../service/jobs/job.service";
import MatchedapplicantModel from "../../../model/matchedApplicant/MatchedApplicant";
// Import the MatchedapplicantModel

export const matchedApplicantHire = async (req: Request, res: Response) => {
	const jobId: string = req.params.jobId;
	if (jobId === undefined) {
		res.status(422).send({
			success: false,
			message: "job id is bad"
		});
	} else {
		try {
			const response = await getApplicantDetailsByJob(jobId);
			if (response) {

				await MatchedapplicantModel.updateOne({ jobId }, { status: "hired" });

				res.status(200).json({
					success: true,
					message: "Applicant Details updated to 'hired' successfully",
					data: response
				});
			}
		} catch (error) {
			res.status(500).json({
				success: false,
				message: "error in server",
				error
			});
		}
	}
}
