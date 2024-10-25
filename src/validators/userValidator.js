const Joi = require('joi');

// Common password validation pattern
const passwordPattern = /(?=.*[!@#$%^&*(),.?":{}|<>])/; // At least one special character

const userAuthSchema = Joi.object({
  username: Joi.string().min(3).max(50).required().messages({
    "string.empty": "username cannot be empty.",
    "string.min": "username must be at least 3 characters long.",
    "string.max": "username must be less than or equal to 50 characters."
  }),

  password: Joi.string()
    .min(8)
    .max(100)
    .pattern(passwordPattern) // Regex for at least one special character
    .required()
    .messages({
      "string.empty": "Password cannot be empty.",
      "string.min": "Password must be at least 8 characters long.",
      "string.max": "Password must be less than or equal to 100 characters.",
      "string.pattern.base": "Password must contain at least one special character."
    })
});

module.exports = {
  userAuthSchema
}