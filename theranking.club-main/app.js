const path = require("path");
var createError = require("http-errors");
var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
require("dotenv").config({ path: path.join(__dirname, ".env") });

//Connect to database
try {
  mongoose.connect(
    "mongodb://" +
      process.env.MONGOUSER +
      ":" +
      process.env.MONGOPASS +
      "@" +
      process.env.MONGOIP +
      ":27017/" +
      process.env.DB +
      "?authSource=admin",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      keepAlive: true,
      keepAliveInitialDelay: 300000,
    }
  );
  console.log("connected to db");
} catch (error) {
  console.log(error);
}
process.on("unhandledRejection", (error) => {
  console.log("unhandledRejection", error.message);
});

var homeRouter = require("./routes/home");
var personRouter = require("./routes/persons");
var imageRouter = require("./routes/images");
var chatRouter = require("./routes/chats");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", homeRouter);
app.use("/images", imageRouter);
app.use("/persons", personRouter);
app.use("/chats", chatRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
