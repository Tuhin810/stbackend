import { Request, Response } from "express"
import { addNewMessage } from "../../service/message/Message.service";
import { MessageObject } from "../../@types/interfaces/MessageObjectInterface";

export const newMessage = async (req: Request, res: Response) => {
	const messageObj: MessageObject = req.body;
	if (!messageObj) {
		res.status(400).json({
			message: "Bad Reuest Body"
		})
	}
	else {
		try {
			const response = await addNewMessage(messageObj);
			res.status(200).json(
				{
					message: "Messages Added Successfully",
					data: response
				}
			)
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

}
