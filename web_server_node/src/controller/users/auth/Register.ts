import { Request, Response } from "express";

import UserModel from "../../../model/applicant/ApplicantSchema";
import { ApplicantDetails } from "../../../@types/interfaces/ApplicantDetails";
import { registerNewApplicant } from "../../../service/applicant/applicant.service";

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
                const userData: ApplicantDetails = data;
                delete(userData.password)
                res.status(200).send({
                    success: true,
                    message: "User Register Successfully",
                    user: userDetails
                });
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