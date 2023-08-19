import { Request, Response } from "express";
import { RecruiterSignUp } from "../../../@types/interfaces/RecruiterSignup";
import { getRecruiterByEmail, postRecruiter } from "../../../service/Recruiter/RecruiterService";
import { getCompanyById, getCompanyByName } from "../../../service/Company/CompanyService";

export const registerNewRecruiter = async (req: Request, res: Response) => {
    const recruiterDetails: RecruiterSignUp = req.body;
    if (!recruiterDetails.email || !recruiterDetails.first_name || !recruiterDetails.password) {
        return res.status(422).json({ error: "fill the form" })
    }
    try {

        const recruiter = await getRecruiterByEmail(recruiterDetails.email);

        if (recruiter) {
            return res.status(409).send({
                success: false,
                message: "Already Registered please login",
            });
        } else {
            const comapny = await getCompanyById(recruiterDetails.company_id);
            if (comapny) {
                postRecruiter(recruiterDetails)
                    .then((data) => {
                        const recruiterDetails: RecruiterSignUp = data;
                        recruiterDetails.password = "";
                        res.status(200).send({
                            success: true,
                            message: "Users Register Successfully",
                            user: recruiterDetails
                        });
                    })
            }
            else{
                return res.status(404).send({
                    success: false,
                    message: "Company not found",
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