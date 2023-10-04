import { Request, Response } from "express";
import ApplicantModel from "../../../model/applicant/ApplicantSchema";
import { UserCredential } from "../../../@types/interfaces/UserCredentail";
import { loginExistingUser } from "../../../service/applicant/applicant.service";
import { isEmail } from "../../../service/commonFunction/CommonFunctions";
const jwt = require("jsonwebtoken");

export const loginUser = async (req: Request, res: Response) => {
    const userCredentail: UserCredential = req.body;

    if (!userCredentail.userId || !userCredentail.password) {
        console.log("unprocessable");

        return res.status(422).json({
            success: false,
            message: "user credential empty",
        });
    }
    try {
        let matchedUser = null;
        if (!isEmail(userCredentail.userId)) {
            matchedUser = await ApplicantModel.findOne({ email: userCredentail.userId })
        }
        else {
            matchedUser = await ApplicantModel.findOne({ phone: userCredentail.userId })
        }

        const user = await loginExistingUser(userCredentail.userId, userCredentail.password);

        if (user) {
            const token = jwt.sign({ _id: matchedUser!._id }, process.env.JWTKEY);
            matchedUser!.tokens = matchedUser!.tokens.concat({ token: token })
            matchedUser!.save()

            user.password = "";
            res.status(200).send({
                success: true,
                message: "login successful from ts",
                applicant: user,
                token

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