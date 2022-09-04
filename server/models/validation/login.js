const Validator = require("express-validator");
const EmptyValidator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateLoginInput(data) {
  let errors = {};

// Convert empty fields to an empty string so we can use validator functions
  data.username = !isEmpty(data.username) ? data.username : "";
  data.password = !isEmpty(data.password) ? data.password : "";

// check if username is valid/not empty
  if (EmptyValidator.isEmpty(data.username)) {
    errors.username = "username field is required";
  } else if (!Validator.isUserName(data.username)) {
    errors.username = "username is invalid";
  }

// check if password is valid/not empty
  if (EmptyValidator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
return {
    errors,
    isValid: isEmpty(errors)
  };
};