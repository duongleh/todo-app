const Joi = require("@hapi/joi");

module.exports.loginValidation = data => {
  const schema = Joi.object({
    username: Joi.string()
      .min(6)
      .required(),
    password: Joi.string()
      .min(6)
      .required(),
    recaptcha: Joi.string()
      .min(6)
      .required()
  });
  return schema.validate(data);
};

module.exports.signupValidation = data => {
  const schema = Joi.object({
    username: Joi.string()
      .min(6)
      .required(),
    email: Joi.string()
      .min(6)
      .required()
      .email(),
    password: Joi.string()
      .min(6)
      .required(),
    confirmPassword: Joi.string()
      .min(6)
      .required()
  });
  return schema.validate(data);
};
