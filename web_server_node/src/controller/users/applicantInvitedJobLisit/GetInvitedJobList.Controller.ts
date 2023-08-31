import { Request, Response } from "express";
import { getApplicantInvitedJobListService } from "../../../service/applicant/applicant.service";

export const getApplicantInvitedJobList =async (req:Request,res:Response) => {
    const applicantId:string=req.params.id;
    if(applicantId===undefined){
        res.status(422).send({
            success:false,
            message:"fields are empty"
        })
    }
    else{
        console.log(applicantId);
        try{
            const response = await getApplicantInvitedJobListService(applicantId);
            console.log('rsponse from controller',response);   
            if(response.length!==0){
                res.status(200).send({
                    success:true,
                    message:"fetched successfully",
                    invitedJobList:response
                })
            }
            else{
                res.status(404).send({
                    success:true,
                    message:"no invited jobs yet",
                    invitedJobList:response
                })
            }
        }
        catch(e){
            res.status(500).send({
                success:false,
                message:"error in server"
            })
        }
    }
}