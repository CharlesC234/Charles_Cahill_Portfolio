var express = require("express"),
  router = express.Router(),
  verifyToken = require("../middlewares/authJWT");
const path = require("path");

router.get("/:image", verifyToken, function (req, res, next) {
  res.sendFile(path.resolve(__dirname, "../images/" + req.params.image));
});

router.get("/insta/:image", verifyToken, function (req, res, next) {
  res.sendFile(path.resolve(__dirname, "../images/insta/" + req.params.image));
});

module.exports = router;
