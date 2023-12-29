import { Request, Response } from "express";
import { generateOTP, sendTextMessage } from "../../../service/sendMessage/SendMessage";
import { encryptData } from "../../../service/encryption/Encryption";
import applicantModel from "../../../model/applicant/ApplicantSchema";


export const fogottenPassword = async (req: Request, res: Response) => {
	try {
		const { applicantPhone } = req.params;
		if (!applicantPhone) {
			return res.status(422).json({
				message: "Applicant ID is missing"
			})
		}

		const applicantInstance = await applicantModel.findOne({ phone: Number(applicantPhone) })

		if (!applicantInstance) {
			return res.status(404).json({
				message: "There is no account connected with is number"
			})
		}

		const otp = generateOTP();
		const encOtp = encryptData(otp);
		// sendTextMessage(otp, applicantInstance.country_code + applicantPhone);
		return res.status(200).json({
			message: "Otp Successfully Sent",
			data: encOtp
		})
	} catch (error) {
		return res.status(400).json({
			message: "Error in Server",
			error: error
		})
	}
}