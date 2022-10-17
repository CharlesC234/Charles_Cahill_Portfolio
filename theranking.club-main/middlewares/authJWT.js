const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.redirect("/");
  }
  try {
    const data = jwt.verify(token, process.env.PASSWORD);
    req.user = data;
    return next();
  } catch {
    return res.clearCookie("access_token").status(200).redirect("/");
  }
};
module.exports = verifyToken;
