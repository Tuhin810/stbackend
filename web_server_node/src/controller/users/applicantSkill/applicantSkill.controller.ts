import { Request, Response } from "express";
import { deleteApplicantSkill, updateApplicantSkill } from "../../../service/applicant/applicant.service";

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
                    applicant: response
                })
            } console.log(response);

        }
        catch (error) {
            res.status(500).send({
                success: false,
                messsage: "error in server"
            })
        }
    }
}