import { Request, Response } from "express";
import { PaymentPackages } from "../../../@types/interfaces/PaymentDetails";
import { buySubscription } from "../../../service/Recruiter/RecruiterService";

export const recruiterPayment = async (req: Request, res: Response) => {
	const payment: PaymentPackages = req.body;
	const recId = req.params.id;
	if (!payment) {
		res.status(422).json({
			message: "Payment Data is Corrupted,Contact 12345678"
		})
	}
	else {
		try {
			const response = await buySubscription(payment, recId);
			if (response) {
				res.send(200).json({
					message: "Paymnet Successfully Recieved",
					data: response
				})
			}
			else {
				res.send(207).json({
					message: "Recruiter Id is not found",
				})
			}
		}
		catch (error) {
			res.send(500).json({
				message: "error in server"
			})
		}
	}
}