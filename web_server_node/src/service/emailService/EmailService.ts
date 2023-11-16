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

export const sendEmailMessage = (code: string) => {
    const message = {
        from: "adutta@aeonixinnovations.com",
        to: "anikdutta0810@gmail.com",
        subject: "Subject",
        text: code
    }
    transporter.sendMail(message, (err, info) => {
        if (err) {
            console.log(err);
        }
        else {

        }
    })
}