import express from "express";
import { newMessage } from "../../controller/message/Message";

const router = express.Router();

router.get("/message/addMessage", newMessage)

export { router as messageRouter }