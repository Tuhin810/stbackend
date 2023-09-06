import { Request, Response } from "express";
import { getApplicantInvitedJobListService } from "../../../service/applicant/applicant.service";

export const getApplicantInvitedJobList = async (req: Request, res: Response) => {
    const applicantId: string = req.params.id;
    if (applicantId === undefined) {
        res.status(422).send({
            success: false,
            message: "fields are empty"
        })
    }
    else {
        console.log(applicantId);
        try {
            const response = await getApplicantInvitedJobListService(applicantId);
            if (response) {
                if (response.invited_job_list.length !== 0) {
                    res.status(200).json({
                        message: "fetched successfully",
                        data: response
                    })
                }
            }
            else {
                res.status(404).send({
                    message: "no invited jobs yet",
                    data: response
                })
            }
        }
        catch (e) {
            res.status(500).send({
                success: false,
                message: "error in server"
            })
        }
    }
}