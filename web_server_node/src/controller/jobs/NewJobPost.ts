import { Request, Response } from "express";
import { JobPostDetails } from "../../@types/interfaces/JobPostDetails";
import JobModel from "../../model/jobs/JobSchema";
import { matchedJobApplicants, postNewJob } from "../../service/jobs/job.service";
import { sendMessage } from "../../service/emailService/EmailService";

//posting new jobs

const postNewJobs = async (req: Request, res: Response) => {

    delete req.body._id;
    const jobDetails: JobPostDetails = req.body;
    if (!jobDetails.job_title || !jobDetails.job_type || !jobDetails.job_description || !jobDetails.no_of_vacancy || !jobDetails.mandatory_skills || !jobDetails.company_id || !jobDetails.job_poster_id) {
        return res.status(422).send({
            success: false,
            message: "Fields are empty",
        });
    }
    else {
        try {
            postNewJob(jobDetails)
                .then((data) => {
                    const jobData = data;
                    try {
                        matchedJobApplicants(data._id).
                            then(()=> {
                                res.status(200).send({
                                    success: true,
                                    message: "Job posted Successfully",
                                    job: jobData,
                                });
                            })
                    }
                    catch (e) {
                        res.status(207).send({
                            success: true,
                            message: "job posted,failedto get applicant list",
                            e
                        })
                    }

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