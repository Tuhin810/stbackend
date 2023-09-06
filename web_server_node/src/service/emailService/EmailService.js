"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const transporter = nodemailer_1.default.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: "29e0b09e24730a",
        pass: "278da817168e78",
    },
    logger: true
});
const sendMessage = () => {
    const message = {
        from: "adutta@aeonixinnovations.com",
        to: "anikdutta0810@gmail.com",
        subject: "Subject",
        text: "Hello SMTP Email"
    };
    transporter.sendMail(message, (err, info) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(info);
        }
    });
};
exports.sendMessage = sendMessage;
