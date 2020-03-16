require("dotenv").config({ path: __dirname + "../.env" });
const HttpStatus = require("http-status-codes");
const axios = require("axios");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const user = require("../models/user.model");
const validate = require("../validations/user.validation");

module.exports.get = async (req, res) => {
  try {
    const acc = await user
      .find()
      .select("-_id +username +email +password -__v");
    res.status(HttpStatus.OK).json(acc);
  } catch (err) {
    res.status(HttpStatus.NOT_FOUND).json({ success: false, message: err });
  }
};

module.exports.login = async (req, res) => {
  const { error } = validate.loginValidation(req.body);
  if (error)
    return res
      .status(HttpStatus.BAD_REQUEST)
      .json({ success: false, message: error.details[0].message });

  // Check if the user exists
  const userExist = await user.findOne({ username: req.body.username });
  if (!userExist)
    return res
      .status(HttpStatus.NOT_FOUND)
      .json({ success: false, message: "User is not found" });

  // Check if the password correct
  const isValidPassword = await bcrypt.compare(
    req.body.password,
    userExist.password
  );
  if (!isValidPassword)
    return res
      .status(HttpStatus.UNAUTHORIZED)
      .json({ success: false, message: "Password is invalid" });

  // Check if recaptcha token is valid
  const reCaptchaOptions = {
    method: "POST",
    url: "https://www.google.com/recaptcha/api/siteverify",
    params: {
      secret: process.env.RECAPTCHA_SECRETKEY,
      response: req.body.recaptcha
    }
  };

  try {
    const result = await axios(reCaptchaOptions);
    console.log(result.data);
    if (result.data.success) {
      // Create and assign token
      const token = jwt.sign({ _id: userExist._id }, process.env.JWT_SECRETKEY);
      return res
        .header("auth-token", token)
        .status(HttpStatus.OK)
        .json({
          success: true,
          userId: userExist._id,
          token: token
        });
    } else {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ success: false, message: "Fail to verify reCaptcha" });
    }
  } catch (err) {
    return res
      .status(HttpStatus.BAD_REQUEST)
      .json({ success: false, message: err });
  }
};

module.exports.signup = async (req, res) => {
  const { error } = validate.signupValidation(req.body);
  if (error)
    return res
      .status(HttpStatus.BAD_REQUEST)
      .json({ success: false, message: error.details[0].message });

  // Check if the user exists
  const userExist = await user.findOne({ username: req.body.username });
  if (userExist)
    return res
      .status(HttpStatus.BAD_REQUEST)
      .json({ success: false, message: "User is already exists" });

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hassedPassword = await bcrypt.hash(req.body.password, salt);

  // Create new User
  const acc = new user({
    username: req.body.username,
    email: req.body.email,
    password: hassedPassword
  });
  try {
    const savedPost = await acc.save();
    return res.status(HttpStatus.CREATED).json({
      success: true,
      userId: savedPost._id
    });
  } catch (err) {
    return res
      .status(HttpStatus.BAD_REQUEST)
      .json({ success: false, message: err });
  }
};
