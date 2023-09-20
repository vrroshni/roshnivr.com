import type { NextApiRequest, NextApiResponse } from "next";

const nodemailer = require("nodemailer");

type Data = {
    message: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === "POST") {
        const {
            name,
            email,
            message,
        }: { name: string; email: string; message: string } = req.body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.NODEMAILER_EMAIL,
                pass: process.env.NODEMAILER_PW,
            },
        });

        const mailOptions = {
            from: process.env.NODEMAILER_EMAIL,
            to: process.env.NODEMAILER_EMAIL,
            subject: `${name.toUpperCase()} sent you a message from Portfolio`,
            text: `Email => ${email}`,
            html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: "Your message was sent successfully." });
        } catch (err) {
            res.status(500).json({ message: `There was an error sending your message. ${err}` });
        }
    }
}
