const Validator = require('validator');
const _ = require('lodash');

module.exports = function validateLoginInput(data) {
  const errors = {};

  const email = _.isEmpty(data.email) ? '' : data.email;
  const password = _.isEmpty(data.password) ? '' : data.password;

  if (Validator.isEmpty(email)) {
    errors.email = 'Email field is required';
  }

  if (!Validator.isEmpty(email) && !Validator.isEmail(email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(password)) {
    errors.password = 'Password field is required';
  }

  return {
    errors,
    isValid: _.isEmpty(errors),
  };
};
