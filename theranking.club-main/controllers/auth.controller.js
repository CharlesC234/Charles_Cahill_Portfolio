var jwt = require("jsonwebtoken");
const {
  uniqueNamesGenerator,
  adjectives,
  animals,
} = require("unique-names-generator");
var emoji = require("node-emoji");

function generateName() {
  var randomName = uniqueNamesGenerator({
    dictionaries: [adjectives, animals],
  });
  return randomName;
}

exports.signin = (req, res, next) => {
  //comparing passwords
  if (String(req.body.password).toLowerCase().trim() === process.env.PASSWORD) {
    //signing token with user id
    var token = jwt.sign(
      {
        emoji: emoji.random(),
        name: generateName(),
        password: req.body.password,
      },
      process.env.PASSWORD,
      {
        expiresIn: 604800,
      }
    );

    //responding to client request with user profile success message and  access token .
    return res
      .cookie("access_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      })
      .redirect("/home");
  } else {
    return res.sendStatus(403);
  }
};
