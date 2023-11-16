const secretPass = "XkhZG4fW2t2W";
import CryptoJS from "crypto-js";

export const encryptData = (text: string) => {
	const data = CryptoJS.AES.encrypt(
		JSON.stringify(text),
		secretPass
	).toString();
	return data;
};