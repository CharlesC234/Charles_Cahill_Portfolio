var express = require("express"),
  router = express.Router(),
  verifyToken = require("../middlewares/authJWT");
const Chat = require("../models/chat");

router.post("/", verifyToken, async (req, res) => {
  const chat = new Chat({
    comment: req.body.comment,
    author: req.user.name,
    icon: req.user.emoji.emoji,
  });

  chat.save();
  res.redirect("/chats");
});

router.get("/chatlog", verifyToken, (req, res) => {
  Chat.find({}, function (err, chats) {
    if (err) {
      console.log(err);
    } else {
      res.render("partials/chatlog", { chats: chats });
    }
  }).limit(100);
});

router.get("/", verifyToken, (req, res) => {
  res.render("chats");
});

module.exports = router;
