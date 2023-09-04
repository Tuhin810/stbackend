import { Request, Response } from "express";

import UserModel from "../../../model/applicant/ApplicantSchema";
import { ApplicantDetails } from "../../../@types/interfaces/ApplicantDetails";
import { getApplicantDetailsByEmail, registerNewApplicant } from "../../../service/applicant/applicant.service";

export const registerNewUser = async (req: Request, res: Response) => {
    const userDetails: ApplicantDetails = req.body;
    delete (userDetails._id);
    if (!userDetails.email || !userDetails.first_name || !userDetails.password) {
        return res.status(422).json({ error: "fill the form" })
    }
    try {
        const user = await UserModel.findOne({ email: userDetails.email })

        if (user) {
            return res.status(409).send({
                success: false,
                message: "Already Register please login",
            });
        } else {
            const data = await registerNewApplicant(userDetails);
            if (data) {
                const applicantResponse= await getApplicantDetailsByEmail(userDetails.email);
                if(applicantResponse){
                    res.status(200).send({
                        success: true,
                        message: "User Register Successfully",
                        user: applicantResponse
                    });
                }
                else{
                    res.status(207).send({
                        success: true,
                        message: "User Register Successfully but failed to get",
                        user: applicantResponse
                    });
                }
                
            }


        }
    } catch (e) {
        res.status(500).send({
            success: false,
            message: "Error in Registeration",
            e,
        });
    }
}