import { Request, Response } from "express";
import ApplicantModel from "../../../model/applicant/ApplicantSchema";
import { UserCredential } from "../../../@types/interfaces/UserCredentail";
var jwt = require('jsonwebtoken');

export const loginUser = async (req: Request, res: Response) => {
    const userCredentail: UserCredential = req.body;

    if (!userCredentail.email || !userCredentail.password) {
        return res.status(422).json({
            success: false,
            message: "Invalid email or password",
        });
    }
    try {

        const matchedUser = await ApplicantModel.findOne({ email: userCredentail.email })
        const user = await ApplicantModel.findOne({ $and: [{ email: userCredentail.email }, { password: userCredentail.password }] });

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