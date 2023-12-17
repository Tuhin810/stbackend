import { Request, Response } from "express";
import { searchApplicantByPreferredJobName } from "../../../service/jobs/job.service";

export const recruiterSearchPreferredJob = async (req: Request, res: Response) => {
	const jobName = req.params.job;
	if (jobName === undefined || jobName === "") {
		res.status(422).json({
			message: "fields are empty"
		})
	}
	else {
		try {
			const searchedJobList = await searchApplicantByPreferredJobName(jobName);
			if (searchedJobList.length != 0) {
				res.status(200).json({
					message: "applicants fetched successfully",
					data: searchedJobList
				})
			}
			else {
				res.status(404).json({
					message: "There is no applicants"
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

