import { Request, Response } from "express";
import { updateApplicantQualification } from "../../../service/applicant/applicant.service";
import { ApplicantQualification } from "../../../@types/interfaces/ApplicantEducation";

export const updateQualification = async (req: Request, res: Response) => {
    const applicantId = req.params.id!;
    const applicantQualification: ApplicantQualification = req.body;
    if (applicantId === undefined || !applicantQualification) {
        res.status(422).send({
            success: false,
            messsage: "fields are empty"
        })
    }
    try {
        const response = await updateApplicantQualification(applicantId, applicantQualification);
        if (response) {
            res.status(200).send({
                success: true,
                message: "qualification details is successfully updated",
                data: response
            })
        }
    }
    catch (e) {
        res.status(500).send({
            success: false,
            message: "error in server",
            error: e
        })
    }

}