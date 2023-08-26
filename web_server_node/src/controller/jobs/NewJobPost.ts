import { Request, Response } from "express";
import { JobsDetails } from "../../@types/interfaces/JobsDetails";
import JobModel from "../../model/jobs/JobSchema";
import { matchedJobApplicants, postNewJob } from "../../service/jobs/jobService";
import { sendMessage } from "../../service/emailService/EmailService";

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
            postNewJob(jobDetails)
                .then((data) => {
                    const jobData = data;
                    try{
                        matchedJobApplicants(data).
                        then(applicantDatalist=>{
                            res.status(200).send({
                                success: true,
                                message: "Job posted Successfully",
                                job: jobData,
                                applicantList:applicantDatalist
                            });
                        })
                    }
                    catch(e){
                        res.status(207).send({
                            success:true,
                            message:"job posted,failedto get applicant list",
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