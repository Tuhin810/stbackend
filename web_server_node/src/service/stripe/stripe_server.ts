import { Response, Request } from "express";
import SubscriptionHistoryModel from "../../model/PlanHistory/PlanHistory";
import mongoose from "mongoose";
import recruiterModel from "../../model/recruiter/RecruiterSchema";
import PlanModel from "../../model/subscription_plans_list/subscription_plans_list_Schema";

// checkout api
const stripe = require('stripe')('sk_test_51ONCPxSCyxdPDARLxZDH1IIxXw79a1snd1rrptJ44tUpgHtdoOxtnlrvuyoGQlJbUr2kS184hvIMZqDwN5YNTp7100ERJdX1vt');


export const stripePayment = async (req: Request, res: Response) => {
	try {
		// Assuming the products are sent in the request body
		const { recruiterId, subscriptionPlanId } = req.body;

		const products = Array.isArray(req.body.products) ? req.body.products : [];

		if (!products.every((product: any) => typeof product === 'object')) {
			console.error("Invalid product data received.");
			return res.status(400).send("Bad Request");
		}

		const lineItems = products.map((product: { plan_name: any; price: number; }) => ({
			price_data: {
				currency: "inr",
				product_data: {
					name: product.plan_name,
				},
				unit_amount: Math.round(product.price * 100),
			},
			quantity: 1,
		}));

		if (lineItems.length === 0) {
			console.error("No line items provided.");
			return res.status(400).send("Bad Request");
		}

		const session = await stripe.checkout.sessions.create({
			payment_method_types: ["card"],
			line_items: lineItems,
			mode: "payment",
			success_url: "http://localhost:5173/employer/success",
			cancel_url: "http://localhost:5173/employer/cancel",
		});
		try {

			const recruiter = await recruiterModel.findById(recruiterId);
			const subscriptionPlan = await PlanModel.findById(subscriptionPlanId);

			if (!recruiter || !subscriptionPlan) {
				return res.status(404).json({ message: "Recruiter or Subscription Plan not found 👍" });
			}
			recruiter.subscription = true;
			recruiter.activated = true;
			recruiter.job_limit += subscriptionPlan.job_limit
			recruiter.subscription_plan_object_id = subscriptionPlan._id;
			recruiter.current_Plan = subscriptionPlan.plan_name
			await recruiter.save();

			//finction to record subscription history
			const subscriptionHistory = new SubscriptionHistoryModel({
				recruiterId: new mongoose.Types.ObjectId(recruiterId),
				planName: subscriptionPlan?.plan_name,
				planPrice: subscriptionPlan?.price,
			});

			// Save the subscription history to the database
			await subscriptionHistory.save();
			res.status(200).json({ id: session.id, message: "Subscription activated successfully 🥳", data: recruiter });
		} catch (error) {
			console.error("Error activating subscription: 😭", error);
			res.status(500).json({ message: "Internal server error 😭" });
		}

	} catch (error) {
		console.error(error);
		res.status(500).send("Internal Server Error");
	}

}