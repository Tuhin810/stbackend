import { MessageInterface } from "./MessageInterface";

export interface MessageObject {
	room_id: string,
	messages: MessageInterface[]
}