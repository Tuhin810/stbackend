import { Request, Response } from "express";
import { JobPostDetails } from "../../@types/interfaces/JobPostDetails";
import { matchedJobApplicants } from "../../service/jobs/job.service";

export const brodcastJob = async (req: Request, res: Response) => {
	const jobId: string = req.params.id;
	if (!jobId) {
		res.status(422).json({
			message: "fields are empty",
		})
	}
	else {
		try {
			const response = await matchedJobApplicants(jobId);
			if (response) {
				res.status(200).json({
					message: "brodcasting successfully",
					data: response
				})

			}
			else {
				res.status(404).json({
					message: "no applicants here",
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