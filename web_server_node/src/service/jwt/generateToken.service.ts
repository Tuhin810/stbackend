import jwt from "jsonwebtoken";
export const generateToken = async (_id: string, role: string) => {
	const user = { _id, role };
	const secretKey = process.env.JWT_KEY;
	// Sign a JWT token
	if (secretKey) {
		const token = jwt.sign(user, secretKey, { expiresIn: 30 });
		return token;
	}
	return null;
}