import { Request, Response } from "express";
import { RecruiterSignUp } from "../../../@types/interfaces/RecruiterDetails";
import { getRecruiterByEmail, getRecruiterByPhone, postRecruiter } from "../../../service/Recruiter/RecruiterService";
import { getCompanyById, getCompanyByName } from "../../../service/Company/CompanyService";
import recruiterModel from "../../../model/recruiter/RecruiterSchema";
import { encryptPass } from "../../../service/commonFunction/CommonFunctions";

export const registerNewRecruiter = async (req: Request, res: Response) => {
    const recruiterDetails: RecruiterSignUp = req.body;
    if (!recruiterDetails.email || !recruiterDetails.first_name || !recruiterDetails.password) {
        return res.status(422).json({ error: "fill the form" })
    }
    try {

        const recruiter = await getRecruiterByEmail(recruiterDetails.email);
        if (!recruiter && recruiterDetails.phone) {
            const recruiterByPhone = await getRecruiterByPhone(recruiterDetails.phone);
            if (recruiterByPhone) {
                return res.status(409).send({
                    success: false,
                    message: "Already Registered please login",
                });
            }
        }

        if (recruiter) {
            return res.status(409).send({
                success: false,
                message: "Already Registered please login",
            });
        }
        const hashPass = await encryptPass(recruiterDetails.password);
        recruiterDetails.password = hashPass
        console.log(recruiterDetails);
        const employerInstance = await new recruiterModel(recruiterDetails).save().then(data => data.populate("company_details"));
        console.log("emp", employerInstance);
        return res.status(200).json({
            message: "Account is created successfully",
            data: employerInstance
        })
    } catch (err) {
        console.log(err);
        res.status(500).send({
            success: false,
            message: "Error in Registeration",
        });
    }
}