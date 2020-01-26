require("dotenv").config({ path: __dirname + "../.env" });
const jwt = require("jsonwebtoken");
const HttpStatus = require("http-status-codes");

module.exports = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token)
    return res
      .status(HttpStatus.UNAUTHORIZED)
      .json({ success: false, message: "Access Denied" });
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRETKEY);
    req.body.user = verified;
    next();
  } catch (err) {
    res
      .status(HttpStatus.BAD_REQUEST)
      .json({ success: false, message: "Invalid Token" });
  }
};
