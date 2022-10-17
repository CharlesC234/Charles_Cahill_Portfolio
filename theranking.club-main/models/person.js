var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

mongoose.SchemaTypes.String.set("trim", true);

var commentSchema = new Schema({
  comment: { type: String, required: true, default: "null" },
  author: { type: String, required: true },
  icon: { type: String, required: true },
  submitted: { type: Date, default: Date.now },
});

var ratedBySchema = new Schema({
  author: { type: String, required: true },
  rating: { type: Number, required: true },
  submitted: { type: Date, default: Date.now },
});

const personSchema = new Schema({
  fname: {
    type: String,
    lowercase: true,
    required: true,
    match: [/^[a-zA-Z]+$/, "Single word only"],
  },
  lname: {
    type: String,
    lowercase: true,
    required: true,
    match: [/^[a-zA-Z]+$/, "Signle word only"],
  },
  currentYear: {
    type: String,
    enum: ["Freshman", "Sophomore", "Junior", "Senior", "GradStudent"],
    required: true,
  },
  insta: { type: String, lowercase: true, required: true, unique: true },
  instaPhotos: [String],
  gRate: { type: [Number], enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
  avgRate: { type: Number, default: 0 },
  numRate: { type: Number, default: 0 },
  comments: [commentSchema],
  photo: { type: String },
  author: { type: String, required: true },
  submitted: { type: Date, default: Date.now },
  ratedBy: [ratedBySchema],
});

module.exports = mongoose.model("person", personSchema);
