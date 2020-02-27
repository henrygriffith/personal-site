const express = require("express");
const router = express.Router();

const nodemailer = require("nodemailer");
const cors = require("cors");
const { USER, PASS } = process.env;

const transport = {
  host: "smtp.mail.yahoo.com",
  service: "Yahoo",
  port: 587,
  auth: {
    user: USER,
    pass: PASS
  }
};
const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

router.post((req, res, next) => {
  const { name, email, message } = req.body;
  const content = `name: ${name} \n email: ${email} \n message: ${message}`;

  const mail = {
    from: name,
    to: USER,
    subject: "New message from Personal Website",
    text: content
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: "fail"
      });
    } else {
      res.json({
        status: "success"
      });
    }
  });
});

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(3002);
