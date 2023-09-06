import { Request, Response } from "express";
import { UserCredential } from "../../../@types/interfaces/UserCredentail";
import { getRecruiterByEmailAndPassword } from "../../../service/Recruiter/RecruiterService";

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
        if (recruiter) {
            recruiter.password = "";
            res.status(200).json({
                success: true,
                message: "login successful",
                recruiter: recruiter
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