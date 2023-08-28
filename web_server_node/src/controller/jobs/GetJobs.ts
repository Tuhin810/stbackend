import { Request, Response } from "express";
import { JobPostDetails } from "../../@types/interfaces/JobPostDetails";
import JobModel from "../../model/jobs/JobSchema";
import { getJobDetailsByJobId, getJobsByCompanyId, getJobsByRecruiterId, postNewJob } from "../../service/jobs/jobService";

//get jobs by company

export const getJobsByCompany = async (req: Request, res: Response) => {

    const companyId: string = req.params.companyId;

    if (!companyId) {
        return res.status(422).send({
            success: false,
            message: "Fields are empty",
        });
    }
    else {
        try {
            getJobsByCompanyId(companyId)
                .then((data) => {
                    const jobsList: JobPostDetails[] = data;
                    if (jobsList.length !== 0) {
                        res.status(200).send({
                            success: true,
                            message: "jobs fetched successfully",
                            jobList: jobsList
                        });
                    }
                    else {
                        res.status(404).send({
                            success: false,
                            message: "job list not found",
                            jobList: jobsList
                        });
                    }
                })


        } catch (e) {
            res.status(500).send({
                success: false,
                message: "Error in Job searching",
                e,
            });
        }
    }
}

export const getJobsRecruiter = async (req: Request, res: Response) => {

    const recruiterId: string = req.params.recruiterId;

    if (!recruiterId) {
        return res.status(422).send({
            success: false,
            message: "Fields are empty",
        });
    }
    else {
        try {
            getJobsByRecruiterId(recruiterId)
                .then((data) => {
                    const jobsList: JobPostDetails[] = data;
                    if (jobsList.length !== 0) {
                        res.status(200).send({
                            success: true,
                            message: "jobs fetched successfully",
                            jobList: jobsList
                        });
                    }
                    else {
                        res.status(404).send({
                            success: false,
                            message: "job list not found",
                            jobList: jobsList
                        });
                    }
                })


        } catch (e) {
            res.status(500).send({
                success: false,
                message: "Error in Job searching",
                e,
            });
        }
    }
}

export const getJobDetails = async (req: Request, res: Response) => {
    const jobId: string = req.params.jobId;
    if (jobId === undefined || !jobId) {
        res.status(422).send({
            success: false,
            message: "job id is bad"
        })
    }
    else {
        try {
            const response = await getJobDetailsByJobId(jobId);
            if(response){
                res.status(200).send({
                    success:true,
                    message:"Job Details fetched successfully",
                    jobDetails:response
                })
            }
        }
        catch(e){
            res.send(500).send({
                success:false,
                message:"internal problem",
                e
            })
        }
    }

}

