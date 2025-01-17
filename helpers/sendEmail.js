// const nodemailer = require("nodemailer");

// const dotenv = require("dotenv");
// dotenv.config();

// const { META_PASSWORD } = process.env;

// const nodemailerConfig = {
//   host: "smtp.meta.ua",
//   port: 465,
//   secure: true,
//   auth: {
//     user: "spacevit@meta.ua",
//     pass: META_PASSWORD,
//   },
// };
// const transport = nodemailer.createTransport(nodemailerConfig);

// const sendEmail = async (data) => {
//   const mail = { ...data, from: "spacevit@meta.ua" };
//   await transport.sendMail(mail);
//   return true;
// };

// module.exports = sendEmail;

const sgMail = require("@sendgrid/mail");

const dotenv = require("dotenv");
dotenv.config();
const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  const mail = { ...data, from: "sledozar@gmail.com" };
  await sgMail.send(mail);
  return true;
};

module.exports = sendEmail;
