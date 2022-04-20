var nodemailer = require("nodemailer");
require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var mail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GOOGLE_USER,
    pass: process.env.GOOGLE_PSW,
  },
});

app.get("/server", (req, res) => {
  res.send(`Hello there`);
});

app.post("/server", jsonParser, (req, res) => {
  var mailOptions = {
    from: "lindahl9898@gmail.com",
    to: "lindahl9898@gmail.com",
    subject: "Drawing from portfolio",
    text: "Drawing",
    html: 'Embedded image: <img src="cid:drawing"/>',
    attachments: [
      {
        filename: "drawing.jpg",
        path: req.body.content,
        cid: "drawing",
        encoding: 'base64'
      },
    ],
  };
  mail.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  res.send(`Mail sent`);
});

app.listen(9000, function () {
  console.log("App running on port 9000");
});
