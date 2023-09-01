import { Request, Response } from "express";
import ApplicantModel from "../../../model/applicant/ApplicantSchema";
import { UserCredential } from "../../../@types/interfaces/UserCredentail";

export const loginUser = async (req: Request, res: Response) => {
    const userCredentail: UserCredential = req.body;

    if (!userCredentail.email || !userCredentail.password) {
        return res.status(422).send({
            success: false,
            message: "Invalid email or password",
        });
    }
    try {

        const user = await ApplicantModel.findOne({ $and: [{ email: userCredentail.email },{ password: userCredentail.password }] });
        if (user) {
            user.password = "";
            res.status(200).send({
                success: true,
                message: "login successful",
                applicant: user
            });
        }
        else {
            res.status(404).send({
                success: false,
                message: "invalid credentials",

            });

        }

    }
    catch (e) {
        res.status(500).send({
            success: false,
            message: "Error in login",
        });
    }

}