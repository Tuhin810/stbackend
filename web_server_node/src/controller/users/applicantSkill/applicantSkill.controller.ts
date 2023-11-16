import { Request, Response } from "express";
import { editApplicantSkill, updateApplicantSkill } from "../../../service/applicant/applicant.service";
// import { deleteApplicantSkill } from "../../../service/applicant/applicant.service";
import ApplicantModel from "../../../model/applicant/ApplicantSchema";

export const updateApplicantSkillById = async (req: Request, res: Response) => {
    const applicantId: string = req.params.id!;
    const skillList: string[] = req.body;

    if (applicantId === undefined || !skillList) {
        res.status(422).send({
            success: false,
            messsage: "fields are empty"
        })
    }
    else {
        try {
            const response = await updateApplicantSkill(applicantId, skillList)
            if (response) {
                res.status(200).send({
                    success: true,
                    messsage: "fetched successfully",
                    data: response
                })
            }

        }
        catch (error) {
            res.status(500).send({
                success: false,
                messsage: "error in server"
            })
        }
    }
}

export const editApplicantSkillById = async (req: Request, res: Response) => {
    const applicantId: string = req.params.id!;
    const skillList: string[] = req.body;

    if (applicantId === undefined || !skillList) {
        res.status(422).send({
            success: false,
            messsage: "fields are empty"
        })
    }
    else {
        try {
            const response = await editApplicantSkill(applicantId, skillList)
            if (response) {
                res.status(200).send({
                    success: true,
                    messsage: "fetched successfully",
                    data: response
                })
            }

        }
        catch (error) {
            res.status(500).send({
                success: false,
                messsage: "error in server"
            })
        }
    }
}
