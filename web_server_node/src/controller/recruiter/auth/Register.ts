
import { Request, Response } from "express";
import { RecruiterSignUp } from "../../../@types/interfaces/RecruiterDetails";
import { getRecruiterByEmail, getRecruiterByPhone, postRecruiter } from "../../../service/Recruiter/RecruiterService";
import { getCompanyById, getCompanyByName } from "../../../service/Company/CompanyService";
import recruiterModel from "../../../model/recruiter/RecruiterSchema";
import { encryptPass } from "../../../service/commonFunction/CommonFunctions";
import { Twilio } from "twilio";

const accountSid = "AC3d3417cdc73b265908b8beeb04f8bea8";
const authToken = "3ecb7f72c81ea98080afe9fdd2245fcc";
const verifyServiceSid = 'VAeb7adb2a3c2bb56c7dbc37125d83282f';

const twilioClient = new Twilio(accountSid, authToken);
// Temporary storage for basic registration details
const temporaryStorage: { [key: string]: RecruiterSignUp } = {};

export const registerNewRecruiter = async (req: Request, res: Response) => {
    const recruiterDetails: RecruiterSignUp = req.body;

    if (!recruiterDetails.email || !recruiterDetails.first_name || !recruiterDetails.password) {
        return res.status(422).json({ error: "Fill the form" });
    }

    // Store basic details in temporary storage
    const registrationKey = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    temporaryStorage[registrationKey] = recruiterDetails;

    // Send OTP to the user
    const verification = await twilioClient.verify
        .services(verifyServiceSid)
        .verifications.create({ to: `+918337877900`, channel: "sms" })
        .then((verification) => {
            console.log(verification.status);
            return registrationKey; // Return the key for identifying the registration details
        })
        .catch((error) => {
            console.error(error);
            return null;
        });

    if (!verification) {
        return res.status(500).json({
            success: false,
            message: "Error in sending OTP",
        });
    }

    return res.status(200).json({
        message: "OTP sent successfully",
        registrationKey,
    });
};
// Endpoint for OTP verification
export const verifyOTP = async (req: Request, res: Response) => {
    const { registrationKey, otpCode } = req.body;

    // Retrieve basic registration details from temporary storage
    const recruiterDetails = temporaryStorage[registrationKey];

    if (!recruiterDetails) {
        return res.status(400).json({
            success: false,
            message: "Invalid registration key",
        });
    }

    // Verify OTP
    try {
        const verification_check = await twilioClient.verify
            .services(verifyServiceSid)
            .verificationChecks.create({
                to: `+918337877900`, // Assuming recruiterDetails.phone contains the user's phone number
                code: otpCode,
            });

        console.log(verification_check.status);

        if (verification_check.status === 'approved') {
            const hashPass = await encryptPass(recruiterDetails.password);
            recruiterDetails.password = hashPass;
            const employerInstance = await new recruiterModel(recruiterDetails).save().then(data => data.populate("company_details"));
            return res.status(200).json({
                message: "Account is created successfully",
                data: employerInstance,
                verificationStatus: true,
            });
        } else {
            return res.status(400).json({
                message: "OTP verification failed",
                verificationStatus: false,
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Error in OTP verification",
        });
    }
};
