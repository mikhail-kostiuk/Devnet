const Validator = require('validator');
const _ = require('lodash');

module.exports = function validateRegisterInput(data) {
  const errors = {};

  const name = _.isEmpty(data.name) ? '' : data.name;
  const email = _.isEmpty(data.email) ? '' : data.email;
  const password = _.isEmpty(data.password) ? '' : data.password;
  const confirmPassword = _.isEmpty(data.confirmPassword) ? '' : data.confirmPassword;

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = 'Name must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(name)) {
    errors.name = 'Name field is required';
  }

  if (Validator.isEmpty(email)) {
    errors.email = 'Email field is required';
  }

  if (!Validator.isEmpty(email) && !Validator.isEmail(email)) {
    errors.email = 'Email is invalid';
  }

  if (!Validator.isLength(password, { min: 6, max: 30 })) {
    errors.password = 'Password must be between 6 and 30 characters';
  }

  if (Validator.isEmpty(password)) {
    errors.password = 'Password field is required';
  }

  if (Validator.isEmpty(confirmPassword)) {
    errors.confirmPassword = 'Confirm password field is required';
  } else if (!Validator.equals(password, confirmPassword)) {
    errors.confirmPassword = 'Passwords must match';
  }

  return {
    errors,
    isValid: _.isEmpty(errors),
  };
};
