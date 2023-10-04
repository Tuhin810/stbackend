import { compare, genSalt, hash } from "bcryptjs";

export const encryptPass = async (password: string): Promise<string> => {
	const salt = await genSalt(10);
	const hashPass = await hash(password, salt);
	return hashPass
}

export const isEmail = (userId: string | number): boolean => {
	if (typeof (userId) === "number") return true;
	return false;
}

export const isPasswordMatched = async (password: string, hash: string): Promise<boolean> => {
	const isMatched = await compare(password, hash);
	return isMatched;
}