import mongoose, { Schema } from "mongoose";
import { MessageObject } from "../../@types/interfaces/MessageObjectInterface";

// model for new message 

export const messageSchema: Schema<MessageObject> = new mongoose.Schema({
	room_id: {
		type: String,
		required: [true, "room id can not be blank"],
		unique: true
	},
	messages: {
		type: [Object]
	}
}
);

const MessageModel = mongoose.model<MessageObject>("messages", messageSchema);

export default MessageModel;