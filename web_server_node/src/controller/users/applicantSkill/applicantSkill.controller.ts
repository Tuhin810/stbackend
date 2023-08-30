import { Request, Response } from "express";
import { updateApplicantSkill } from "../../../service/applicant/applicantService.service";

export const updateApplicantSkillById =async (req:Request,res:Response) => {
    const applicantId:string=req.params.id!;
    const skill:string= req.params.skill!;

    if(applicantId===undefined || !skill){
        res.status(422).send({
            success: false,
            messsage: "fields are empty"
        })
    }
    else{
        try{
            const response = await updateApplicantSkill(applicantId,skill)
            if(response){
                res.status(200).send({
                    success: true,
                    messsage: "fetched successfully",
                    applicant:response
                })
            }console.log(response);
            
        }
        catch(error){
            res.status(500).send({
                success: false,
                messsage: "error in server"
            })
        }
    }
}