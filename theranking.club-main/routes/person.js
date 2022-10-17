var express = require("express"),
  router = express.Router(),
  verifyToken = require("../middlewares/authJWT");
const person = require("../models/person");
const multer = require("multer");
const insta = require("../scripts/insta");
var Jimp = require("jimp");
const path = require("path");

const storage = multer.diskStorage({
  destination: "./images",

  filename: function (req, file, cb) {
    cb(
      null,
      String(req.body.fname).toLowerCase() +
        "_" +
        String(req.body.lname).toLowerCase() +
        ".jpg"
    );
  },
});

var upload = multer({
  storage: storage,
  limits: { fileSize: 2000000 },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype !== "image/jpg" &&
      file.mimetype !== "image/jpeg" &&
      file.mimetype !== "image/png" &&
      file.mimetype !== "image/PNG"
    ) {
      return cb(new Error("Please upload a jpg or png photo"));
    }
    cb(null, true);
  },
});

router.get("/refresh", verifyToken, (req, res) => {
  insta.refresh();
  return res.status(200).json({ message: "Refreshed" });
});

router.get("/refresh/:name", verifyToken, (req, res) => {
  var name = req.params.name.split("_");
  person.findOne({ fname: name[0], lname: name[1] }, function (err, person) {
    if (err) {
      console.log(err);
    } else if (person) {
      insta.downloadInstaPosts(person);
      return res.status(200).json({ message: "Refreshed" });
    } else if (person == null) {
      return res.json({ error: "person does not exist" });
    }
  });
});

router.get("/add", verifyToken, (req, res) => {
  return res.render("addperson");
});

router.get("/:name", verifyToken, async (req, res) => {
  var name = req.params.name.split("_");
  person.findOne({ fname: name[0], lname: name[1] }, function (err, person) {
    if (err) {
      console.log(err);
    } else if (person) {
      person.avgRate = person.avgRate.toFixed(2);
      return res.render("person", { person });
    } else if (person == null) {
      return res.json({ error: "person does not exist" });
    }
  });
});

router.post("/add", verifyToken, async (req, res) => {
  await person.findOne(
    { fname: req.body.fname, lname: req.body.lname },

    async function (err, doc) {
      if (err) {
        console.log(err);
      } else if (doc) {
        return res.redirect("/persons/" + doc.fname + "_" + doc.lname);
      } else if (!doc) {
        const person = new person({
          fname: req.body.fname,
          lname: req.body.lname,
          currentYear: req.body.currentYear,
          insta: req.body.insta,
          photo:
            String(req.body.fname).toLowerCase().trim() +
            "_" +
            String(req.body.lname).toLowerCase().trim() +
            ".jpg",
          comments: [],
          gRate: [req.body.rating],
          avgRate: req.body.rating,
          author: req.user.name,
          ratedBy: [{ author: req.user.name, rating: req.body.rating }],
        });

        person.save(async (err, person) => {
          if (err) {
            res.status(500).send({
              message: err,
            });
            return;
          } else {
            await insta.downloadInstaPosts(person);

            return res.redirect("/persons/" + person.fname + "_" + person.lname);
          }
        });
      }
    }
  );
});

router.post("/rate/:name/:rating", verifyToken, async (req, res) => {
  var name = req.params.name.split("_");
  if (req.params.rating == "FORM") {
    req.params.rating = req.body.rating;
  }
  person.findOne({ fname: name[0], lname: name[1] }, function (err, person) {
    if (err) {
      console.log(err);
    } else if (person) {
      var flag = false;
      var flagindex;
      let ratings = [];

      person.ratedBy.find(function (rating, index) {
        if (rating.author == req.user.name) {
          flagindex = index;
          flag = true;
        }
      });

      if (flag) {
        person.ratedBy[flagindex].rating = req.params.rating;
        person.ratedBy[flagindex].submitted = Date.now();
      } else {
        person.ratedBy.push({
          author: req.user.name,
          rating: req.params.rating,
        });
      }

      person.ratedBy.forEach((item) => {
        ratings.push(item.rating);
      });

      person.gRate = ratings;
      person.numRate = ratings.length;

      let sum = person.gRate.reduce((previous, current) => (current += previous));
      let avg = sum / person.gRate.length;
      person.avgRate = avg;
      person.save();
      res.redirect("/persons/" + person.fname + "_" + person.lname);
    } else if (person == null) {
      return res.json({ error: "person does not exist" });
    }
  });
});

router.post("/comment/:name", verifyToken, async (req, res) => {
  var name = req.params.name.split("_");
  person.findOne({ fname: name[0], lname: name[1] }, function (err, person) {
    if (err) {
      console.log(err);
    } else if (person) {
      var comment = {
        comment: req.body.comment,
        author: req.user.name,
        icon: req.user.emoji.emoji,
      };
      person.comments.push(comment);
      person.save();
      res.redirect("/persons/" + person.fname + "_" + person.lname);
    } else if (person == null) {
      return res.json({ error: "person does not exist" });
    }
  });
});

module.exports = router;
