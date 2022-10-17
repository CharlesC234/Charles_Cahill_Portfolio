var express = require("express"),
  router = express.Router(),
  verifyToken = require("../middlewares/authJWT"),
  { signin } = require("../controllers/auth.controller.js");
var fs = require("fs");
const Email = require("../models/email");
const person = require("../models/person");

/* GET password page. */
router.get("/", function (req, res, next) {
  const token = req.cookies.access_token;
  if (token) {
    return res.redirect("/home");
  } else {
    return res.render("index");
  }
});

router.post("/login", signin, function (req, res, next) {
  next();
});

router.post("/email", verifyToken, function (req, res, next) {
  const email = req.body.email;
  Email.create({ email: email }, function (err, email) {
    if (err) return console.log(err);
  });
  res.redirect("/home");
});

router.get("/logout", (req, res) => {
  return res.clearCookie("access_token").status(200).redirect("/");
});

router.get("/home", verifyToken, async function (req, res) {
  await person.find()
    .sort({ avgRate: "-1" })
    .exec(function (err, persons) {
      persons.forEach((person, index) => {
        person.avgRate = person.avgRate.toFixed(1);
      });
      res.render("home", { user: req.user, persons: persons });
    });
});

module.exports = router;
