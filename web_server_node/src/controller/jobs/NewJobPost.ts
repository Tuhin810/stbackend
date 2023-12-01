import { Request, Response } from "express";
import { JobPostDetails } from "../../@types/interfaces/JobPostDetails";
import JobModel from "../../model/jobs/JobSchema";
import { matchedJobApplicants, postNewJob } from "../../service/jobs/job.service";
import recruiterModel from "../../model/recruiter/RecruiterSchema";

// Posting new jobs
const postNewJobs = async (req: Request, res: Response) => {
    try {
        delete req.body._id;
        const jobDetails: JobPostDetails = req.body;

        if (!jobDetails.job_title || !jobDetails.job_type || !jobDetails.job_description || !jobDetails.no_of_vacancy || !jobDetails.mandatory_skills || !jobDetails.company_id || !jobDetails.job_poster_id) {
            return res.status(422).send({
                success: false,
                message: "Fields are empty",
            });
        } else {
            // Check if the recruiter has a valid subscription and available job limit
            const recruiterDetails = await recruiterModel.findById(jobDetails.job_poster_id);
            if (recruiterDetails) {
                if (recruiterDetails.subscription && recruiterDetails.job_limit > 0) {
                    // Post new job
                    const data = await postNewJob(jobDetails);
                    await recruiterModel.findByIdAndUpdate(recruiterDetails._id, {
                        $inc: { job_limit: -1 },
                    });
                    await matchedJobApplicants(data._id);

                    return res.status(200).send({
                        success: true,
                        message: "Job posted Successfully",
                        job: data,

                    });
                } else {
                    return res.status(401).send({
                        success: false,
                        message: "You need to buy a subscription. Job posting limit reached.",
                    });
                }
            }


        }
    } catch (error: any) {
        console.error("Error in Job posting:", error.message);
        return res.status(500).send({
            success: false,
            message: "Error in Job posting",
            error: error.message,
        });
    }
};

export default postNewJobs;
