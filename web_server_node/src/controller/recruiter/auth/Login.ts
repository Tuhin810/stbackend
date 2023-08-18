import { Request, Response } from "express";
import { UserCredential } from "../../../@types/interfaces/UserCredentail";
import { getRecruiterByEmailAndPassword } from "../../../service/Recruiter/RecruiterService";

export const loginUser = async (req: Request, res: Response) => {
    const recruiterCredentail: UserCredential = req.body;

    if (!recruiterCredentail.email || !recruiterCredentail.password) {
        return res.status(422).send({
            success: false,
            message: "Invalid email or password",
        });
    }
    try {

        const recruiter = await getRecruiterByEmailAndPassword(recruiterCredentail);
        console.log(recruiterCredentail);
        console.log(recruiter);


        if (recruiter) {
            recruiter.password = "";
            res.status(200).send({
                success: true,
                message: "login successful",
                recruiter: recruiter
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