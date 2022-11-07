const nodemailer = require("nodemailer");

const dotenv = require("dotenv");
dotenv.config();

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "spacevit@meta.ua",
    pass: META_PASSWORD,
  },
};
const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const mail = { ...data, from: "spacevit@meta.ua" };
  await transport.sendMail(mail);
  return true;
};

module.exports = sendEmail;
