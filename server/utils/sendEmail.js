import nodemailer from "nodemailer";

const sendEmail = ({ email, subject, message }) => {
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  transporter.sendMail({
    from: process.env.EMAIL,
    to: email,
    subject: subject,
    html: message,
  });
};

export default sendEmail;
