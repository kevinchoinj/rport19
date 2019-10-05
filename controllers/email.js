const nodemailer = require('nodemailer');
const jsonData = require('../config.json');
const emailer = jsonData.password;
const EMAIL_SENDER = jsonData.emailSender;
const EMAIL_RECIPIENT = jsonData.emailRecipient;

const mailList = [
  EMAIL_RECIPIENT,
];

const smtpTransport = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  auth: {
    user: EMAIL_SENDER,
    pass: emailer,
  },
  tls: {rejectUnauthorized: false},
  debug :true
});

class EmailController {
  sendContact(req, res) {
    const mailOptions={
      to: mailList,
      subject: req.body.email,
      text: req.body.message
    };
    smtpTransport.sendMail(mailOptions, function(error, response){
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