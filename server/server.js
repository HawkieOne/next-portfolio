var nodemailer = require("nodemailer");
require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var cors = require("cors");
const corsOptions = {
  origin: ["http://hakanlindahl.com", "http://localhost:3000"],
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

app.get("/serverDrawing", (req, res) => {
  res.send(`GET: Hello there`);
});

app.post("/serverDrawing", jsonParser, (req, res) => {
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
        encoding: "base64",
      },
    ],
  };
  mail.sendMail(mailOptions, function (error, info) {
    if (error) {
      return res.status(400).send({
        message: "The mail could not be sent!",
      });
    } else {
      console.log("Email sent: " + info.response);
      res.send(`Mail sent`);
    }
  });  
});

app.post("/serverContact", jsonParser, (req, res) => {
  var mailOptions = {
    from: "lindahl9898@gmail.com",
    to: "lindahl9898@gmail.com",
    subject: "Contact from portfolio",
    text:
      "Name: " +
      req.body.from_name +
      "\n" +
      "Mail: " +
      req.body.from_email +
      "\n" +
      "Message: " +
      req.body.message +
      "\n" +
      "Rating: " +
      req.body.rating +
      "\n",
  };
  console.log(req.body.rating);
  mail.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      return res.status(400).send({
        message: "The mail could not be sent!",
      });
    } else {
      console.log("Email sent: " + info.response);
      res.send(`Mail sent`);
    }
  });  
});

app.listen(9000, function () {
  console.log("App running on port 9000");
});
