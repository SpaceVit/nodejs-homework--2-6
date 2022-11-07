const dotenv = require("dotenv");
dotenv.config();
const { BASE_URL } = process.env;

const createVerifyEmail = (email, verificationToken) => {
  const mail = {
    to: email,
    subject: "Confirm register",
    html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${verificationToken}">push to confirm</a>`,
  };

  return mail;
};

module.exports = createVerifyEmail;
