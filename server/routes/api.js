const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const db = "mongodb+srv://admin:admin@cluster0-qllcs.mongodb.net/test?retryWrites=true&w=majority";
const User = require("../models/user");
var fileRoutes = require("./file");
const Upload = require("../models/upload");

const app = express();
mongoose.connect(db, { useNewUrlParser: true }, err => {
  if (err) {
    console.error("Error!" + err);
  } else {
    console.log("connected to mongodb");
  }
});

router.get("/", (req, res) => {
  res.send("From API route");
});

router.post("/register", (req, res) => {
  let userData = req.body;
  let user = new User(userData);
  user.save((error, registeredUser) => {
    if (error) {
      console.log(error);
    } else {
      let payload = { subject: registeredUser._id };
      let token = jwt.sign(payload, "secretKey");
      res.status(200).send({ token });
    }
  });
});

router.get("/viewup", function(req, res) {
  Upload.find({}).exec(function(err, upload) {
    if (err) {
      console.log(err);
    } else {
      res.json(upload);
    }
  });
});

router.post("/uploads", (req, res) => {
  let uploadData = req.body;
  let upload = new Upload(uploadData);
  upload.save((error, uploadUser) => {
    if (error) {
      console.log(error);
    } else {
      res.status(200);
    }
  });
});

router.post("/delup", (req, res) => {
  let uData = req.body;
  let dData = Upload(uData);
  dData.deleteOne({ _id: uData._id });
});

router.post("/login", (req, res) => {
  let userData = req.body;
  User.findOne({ email: userData.email }, (error, user) => {
    if (error) {
      console.log(error);
    } else {
      if (!user) {
        res.status(401).send("invalid email");
      } else {
        if (user.password !== userData.password) {
          res.status(401).send("invalid password");
        } else {
          let payload = { subject: user._id };
          let token = jwt.sign(payload, "secretKey");
          res.status(200).send({ token });
        }
      }
    }
  });
});

module.exports = router;
