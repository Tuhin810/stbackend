
import { Request, Response } from "express";
import UserModel from "../../../model/applicant/ApplicantSchema";
import { ApplicantDetails } from "../../../@types/interfaces/ApplicantDetails";
import { registerNewApplicant, getApplicantDetailsByEmail } from "../../../service/applicant/applicant.service";
import { Twilio } from "twilio";
import { encryptPass } from "../../../service/commonFunction/CommonFunctions";


const accountSid = "AC3d3417cdc73b265908b8beeb04f8bea8";
const authToken = "3ecb7f72c81ea98080afe9fdd2245fcc";
const verifyServiceSid = 'VAeb7adb2a3c2bb56c7dbc37125d83282f';

const twilioClient = new Twilio(accountSid, authToken);

// Temporary storage for basic registration details
const temporaryStorage: { [key: string]: ApplicantDetails } = {};

// Function to register a new user
export const registerNewUser = async (req: Request, res: Response) => {
    const userDetails: ApplicantDetails = req.body;
    delete userDetails._id;

    if (!userDetails.email || !userDetails.first_name || !userDetails.password) {
        return res.status(422).json({ error: "Fill the form" });
    }

    try {
        const user = await UserModel.findOne({ email: userDetails.email });

        if (user) {
            return res.status(409).send({
                success: false,
                message: "Already registered, please login",
            });
        } else {

            if (userDetails.phone) {
                // Store basic details in temporary storage
                const registrationKey = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
                temporaryStorage[registrationKey] = userDetails;

                // Send OTP to the user
                const verification = await twilioClient.verify
                    .services(verifyServiceSid)
                    .verifications.create({ to: `+918101844250`, channel: "sms" })
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
            } else {
                const employerInstance = await new UserModel(userDetails).save()
                return res.status(200).json({
                    message: "Account is created successfully",
                    data: employerInstance,
                    verificationStatus: true,
                });
            }
        }

    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error in registration",
            error,
        });
    }
};

// Endpoint for OTP verification
export const verifyOTPforUser = async (req: Request, res: Response) => {
    const { registrationKey, otpCode } = req.body;

    // Retrieve basic registration details from temporary storage
    const userDetails = temporaryStorage[registrationKey];

    if (!userDetails) {
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
                to: `+918101844250`, // Assuming recruiterDetails.phone contains the user's phone number
                code: otpCode,
            });

        console.log(verification_check.status);

        if (verification_check.status === 'approved') {
            const hashPass = await encryptPass(userDetails.password);
            userDetails.password = hashPass;
            const employerInstance = await new UserModel(userDetails).save()
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
