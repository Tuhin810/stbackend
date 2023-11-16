import express from "express";
import { newMessage } from "../../controller/message/Message";

const router = express.Router();

router.route("/message/addMessage").get(newMessage)

module.exports = router