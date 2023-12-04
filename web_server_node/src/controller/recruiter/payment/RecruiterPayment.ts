import { Request, Response } from "express";
import { PaymentPackages } from "../../../@types/interfaces/PaymentDetails";
import { buySubscription } from "../../../service/Recruiter/RecruiterService";
import recruiterModel from "../../../model/recruiter/RecruiterSchema";

export const recruiterPayment = async (req: Request, res: Response) => {
	const payment = req.body;
	const recId = "65534632337de1863b322a7b";

	if (!payment) {
		res.status(422).json({
			message: "Payment Data is Corrupted, Contact 12345678",
		});
	} else {
		try {
			const response = await buySubscription(payment, recId);

			if (response.success) {
				res.status(200).json({
					message: "Payment Successfully Received",
					data: response.data,
					msg: payment
				});
			} else {
				res.status(207).json({
					message: response.message,
				});
			}
		} catch (error) {
			console.error(error);
			res.status(500).json({
				message: "Error in server",
			});
		}
	}
};