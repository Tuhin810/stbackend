import { Request, Response } from "express"
import { getAllPaymentPackages, postPayment } from "../../service/payment/payment.service"
import { PaymentPackages } from "../../@types/interfaces/PaymentDetails";

export const getAllPayment = async (req: Request, res: Response) => {
	try {
		const response = await getAllPaymentPackages();
		if (response) {
			res.status(200).json(
				{
					message: "Payment Packages Fetched Successfully",
					data: response
				}
			)
		}
		else {
			res.status(404).json(
				{
					message: "Payment Packages not found",
				}
			)
		}
	}
	catch (error) {
		res.status(500).json(
			{
				message: "Error in Server",
				error
			}
		)
	}
}

export const postNewPayment = async (req: Request, res: Response) => {
	const paymentPackage: PaymentPackages = req.body;
	if (!paymentPackage) {
		res.status(422).json(
			{
				message: "Payment Package is Empty"
			}
		)
	}
	try {
		const response = await postPayment(paymentPackage);
		if (response) {
			res.status(200).json(
				{
					message: "Payment Packages Fetched Successfully",
					data: response
				}
			)
		}
		else {
			res.status(404).json(
				{
					message: "Payment Packages not found",
				}
			)
		}
	}
	catch (error) {
		res.status(500).json(
			{
				message: "Error in Server",
				error
			}
		)
	}
}