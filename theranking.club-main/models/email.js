var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var emailSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  },
  submitted: { type: Date, default: Date.now },
});

module.exports = mongoose.model("email", emailSchema);
