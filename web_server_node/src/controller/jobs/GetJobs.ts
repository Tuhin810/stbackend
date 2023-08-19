import { Request, Response } from "express";
import { JobsDetails } from "../../@types/interfaces/JobsDetails";
import JobModel from "../../model/jobs/JobSchema";
import { getJobsByCompanyId, getJobsByRecruiterId, postNewJob } from "../../service/jobs/jobService";

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
                    const jobsList: JobsDetails[] = data;
                    if(jobsList.length!==0){
                        res.status(200).send({
                            success: true,
                            message:"jobs fetched successfully",
                            jobList: jobsList
                        });
                    }
                    else{
                        res.status(404).send({
                            success: false,
                            message:"job list not found",
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
                    const jobsList: JobsDetails[] = data;
                    if(jobsList.length!==0){
                        res.status(200).send({
                            success: true,
                            message:"jobs fetched successfully",
                            jobList: jobsList
                        });
                    }
                    else{
                        res.status(404).send({
                            success: false,
                            message:"job list not found",
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

