import { Request, Response } from "express";
import { getApplicantDetails } from "../../../service/applicant/applicant.service";
export const getApplicantDetailsById = async (req: Request, res: Response) => {
    const applicantId = req.params.id;
    if (applicantId != undefined) {
        try {
            await getApplicantDetails(applicantId).then(data => {
                if (data) {
                    res.status(200).send({
                        success: true,
                        message: "applicant details fetched successfully",
                        applicant: data
                    })
                }
                else {
                    res.status(404).send({
                        success: false,
                        message: "invalid userId",
                        applicant: data
                    })
                }
            })
        }
        catch (e) {
            res.status(500).send({
                success: false,
                message: "error in server",
                error: e
            })
        }
    }
    else {
        res.status(422).send({
            success: true,
            message: "applicant id is undefined",
        })
    }
}