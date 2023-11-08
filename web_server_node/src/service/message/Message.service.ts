import { MessageObject } from "../../@types/interfaces/MessageObjectInterface";
import MessageModel from "../../model/messageModel/MessageIModel";

export const addNewMessage = async (messageObject: MessageObject) => {
	try {
		const response = await getMessagesByRoom(messageObject.room_id);
		if (!response) {
			const response = await MessageModel.create(messageObject);
			return response;
		}
		else {
			updateMessageByRoom(messageObject)
		}
	}
	catch (error) {
		throw error;
	}
}

export const getMessagesByRoom = async (room_id: string) => {
	try {
		const response = await MessageModel.findOne({ room_id: room_id });
		return response;
	}
	catch (error) {
		throw error;
	}
}

export const updateMessageByRoom = async (messageObject: MessageObject) => {
	await MessageModel.updateOne(
		{ room_id: messageObject.room_id },
		{
			$push: {
				messages: {
					$each: messageObject.messages
				}
			}
		}
	)
	const response = await getMessagesByRoom(messageObject.room_id);
	return response;
}