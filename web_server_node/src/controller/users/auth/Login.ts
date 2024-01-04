import { Request, Response } from "express";
import applicantModel from "../../../model/applicant/ApplicantSchema";
import { UserCredential } from "../../../@types/interfaces/UserCredentail";
import { loginExistingUser } from "../../../service/applicant/applicant.service";
import { isEmail } from "../../../service/commonFunction/CommonFunctions";

export const loginUser = async (req: Request, res: Response) => {
    const userCredentail: UserCredential = req.body;

    if (!userCredentail.userId || !userCredentail.password) {
        return res.status(422).json({
            success: false,
            message: "user credential empty",
        });
    }
    try {
        let matchedUser = null;
        if (!isEmail(userCredentail.userId)) {
            matchedUser = await applicantModel.findOne({ email: userCredentail.userId })
        }
        else {
            matchedUser = await applicantModel.findOne({ phone: userCredentail.userId })
        }

        const user = await loginExistingUser(userCredentail.userId, userCredentail.password);

        if (user) {
            user.password = "";
            res.status(200).send({
                success: true,
                message: "login successful from ts",
                applicant: user,

            });
        }
        else {
            res.status(401).send({
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

export const googleLogin = async (req: Request, res: Response) => {

    try {
        const { email } = req.params;
        const applicantInstance = await applicantModel.findOne({ email: email });
        if (applicantInstance) {
            res.status(200).send({
                success: true,
                message: "login successful by google",
                data: applicantInstance,
            });
        }
        else {
            res.status(404).send({
                success: false,
                message: "account not found",
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