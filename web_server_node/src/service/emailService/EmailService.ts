import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
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

export const sendMessage = () => {
    const message = {
        from: "adutta@aeonixinnovations.com",
        to: "anikdutta0810@gmail.com",
        subject: "Subject",
        text: "Hello SMTP Email"
    }
    transporter.sendMail(message, (err, info) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(info);
        }
    })
}