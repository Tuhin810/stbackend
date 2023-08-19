import { Request, Response } from "express";
import { JobsDetails } from "../../@types/interfaces/JobsDetails";
import JobModel from "../../model/jobs/JobSchema";

//posting new jobs

const postNewJobs = async (req: Request, res: Response) => {

    const jobDetails: JobsDetails = req.body;

    if (!jobDetails.jobTitle || !jobDetails.jobType || !jobDetails.jobDescription || !jobDetails.no_of_vacancy || !jobDetails.skills || !jobDetails.company_id || !jobDetails.job_poster_id) {
        return res.status(422).send({
            success: false,
            message: "Fields are empty",
        });
    }
    else {
        try {
            JobModel
                .create(jobDetails)
                .then((data) => {
                    const jobDetails: JobsDetails = data;
                    res.status(200).send({
                        success: true,
                        message: "Job posted Successfully",
                        job: jobDetails
                    });
                })


        } catch (e) {
            res.status(500).send({
                success: false,
                message: "Error in Job posting",
                e,
            });
        }
    }
}

export default postNewJobs;