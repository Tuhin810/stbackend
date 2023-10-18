import { PaymentPackages } from "../../@types/interfaces/PaymentDetails";
import PaymentModel from "../../model/payment/PaymentSchema";

export const postPayment = async (paymentPackage: PaymentPackages) => {
	await PaymentModel.create(paymentPackage);
	const response = await getAllPaymentPackages();
	return response;
}

export const getAllPaymentPackages = async () => {
	const response = await PaymentModel.find({}).lean();
	return response;
}