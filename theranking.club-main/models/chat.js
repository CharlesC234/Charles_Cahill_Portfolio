var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var chatSchema = new Schema({
  comment: { type: String, required: true, default: "null" },
  author: { type: String, required: true },
  icon: { type: String, required: true },
  submitted: { type: Date, default: Date.now },
});

module.exports = mongoose.model("chat", chatSchema);
