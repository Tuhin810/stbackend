import { Request, Response } from "express";
import { UserCredential } from "../../../@types/interfaces/UserCredentail";
import { getRecruiterByEmail, getRecruiterByEmailAndPassword } from "../../../service/Recruiter/RecruiterService";
var jwt = require('jsonwebtoken');
export const loginRecruiter = async (req: Request, res: Response) => {
    const recruiterCredentail: UserCredential = req.body;

    if (!recruiterCredentail.email || !recruiterCredentail.password) {
        return res.status(422).json({
            success: false,
            message: "Invalid email or password",
        });
    }
    try {

        const recruiter = await getRecruiterByEmailAndPassword(recruiterCredentail);
        const matchedrecruiter = await getRecruiterByEmail(recruiterCredentail.email)

        const token = jwt.sign({ _id: matchedrecruiter!._id }, process.env.JWTKEY);
        matchedrecruiter!.tokens = matchedrecruiter!.tokens.concat({ token: token })
        matchedrecruiter!.save()

        if (recruiter) {
            recruiter.password = "";
            res.status(200).json({
                success: true,
                message: "login successful from ts",
                recruiter: recruiter,
                token
            });
        }
        else {
            res.status(404).json({
                success: false,
                message: "invalid credentials",

            });

        }

    }
    catch (error) {
        res.status(500).send({
            message: "Error in login",
            error
        });
    }

}