// import { Request, Response } from "express";
// const stripe = require('stripe')('sk_test_51ONCPxSCyxdPDARLxZDH1IIxXw79a1snd1rrptJ44tUpgHtdoOxtnlrvuyoGQlJbUr2kS184hvIMZqDwN5YNTp7100ERJdX1vt');

// export const StrypePayment = async (res: Response, req: Request) => {
// 	try {

// 		// Assuming the products are sent in the request body
// 		const products = Array.isArray(req.body) ? req.body : [];

// 		if (!products.every(product => typeof product === 'object')) {
// 			console.error("Invalid product data received.");
// 			res.status(400).json("Bad Request");
// 		}

// 		const lineItems = products.map((product) => ({
// 			price_data: {
// 				currency: "inr",
// 				product_data: {
// 					name: product.plan_name,
// 				},
// 				unit_amount: Math.round(product.price * 100),
// 			},
// 			quantity: 1,
// 		}));

// 		if (lineItems.length === 0) {
// 			console.error("No line items provided.");
// 			res.status(400).send("Bad Request");
// 		}

// 		const session = await stripe.checkout.sessions.create({
// 			payment_method_types: ["card"],
// 			line_items: lineItems,
// 			mode: "payment",
// 			success_url: "http://localhost:5173/employer/success",
// 			cancel_url: "http://localhost:5173/employer/cancel",
// 		});

// 		res.json({ id: session.id, data: products });
// 	} catch (error) {
// 		console.error(error);
// 		res.status(500).send("Internal Server Error");
// 	}
// }