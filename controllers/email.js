const nodemailer = require('nodemailer');
const jsonData = require('../config.json');
const EMAIL_RECIPIENT = jsonData.emailRecipient;
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const mailList = [
  EMAIL_RECIPIENT,
];

const createTransporter = async () => {
  const oauth2Client = new OAuth2(
    jsonData.clientId,
    jsonData.clientSecret,
    "https://developers.google.com/oauthplayground"
  );

  oauth2Client.setCredentials({
    refresh_token: jsonData.refreshToken,
  });

  const accessToken = await new Promise((resolve, reject) => {
    oauth2Client.getAccessToken((err, token) => {
      if (err) {
        reject();
      }
      resolve(token);
    });
  });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      type: "OAuth2",
      user: jsonData.emailSender,
      accessToken,
      clientId: jsonData.clientId,
      clientSecret: jsonData.clientSecret,
      refreshToken: jsonData.refreshToken,
    },
  });

  return transporter;
};

const sendEmail = async (emailOptions, cb) => {
  let emailTransporter = await createTransporter();
  await emailTransporter.sendMail(emailOptions, (error, response) => {
    cb(error, response);
  });
};

class EmailController {
  sendContact(req, res) {
    const mailOptions={
      to: mailList,
      subject: req.body.email,
      text: req.body.message
    };
    sendEmail(mailOptions, function(error, response){
      if(error) {
        res.status(400).send(error);
        console.log('contact email error');
      }
      else{
        res.status(200).send(response);
      }
    });
  }
}

const emailController = new EmailController();
module.exports = {
  emailController,
};