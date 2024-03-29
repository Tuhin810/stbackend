import { Twilio } from "twilio";
import { accountSid, authToken } from "../..";

const client = new Twilio("AC324e013b4f7478582bb47924c19ee849", "6857853c70847063bd4d51d10795c891");

export const sendTextMessage = () => {
	client.messages.create({
		body: "hellowwww",
		to: "+91 81018 44250",
		from: "+18886024229"
	})
		.then((message) => console.log(message.sid));
}

export const generateOTP = (): string => {

	const digits = "0123456789";
	let OTP = "";
	for (let i = 0; i < 6; i++) {
		OTP += digits[Math.floor(Math.random() * 10)];
	}
	return OTP;
} 