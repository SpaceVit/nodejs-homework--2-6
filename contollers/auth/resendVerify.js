const { User } = require("../../models");
const { RequestError, createVerifyEmail, sendEmail } = require("../../helpers");

const resendVerify = async (res, req) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    throw RequestError(400, "missing required field email");
  }

  if (!user.verify === true) {
    throw RequestError(400, "Verification has already been passed");
  }

  const mail = createVerifyEmail(email, user.verificationToken);
  await sendEmail(mail);

  res.json({
    message: "Verification email sent",
  });
};

module.exports = resendVerify;
