const Validator = require('validator');
const _ = require('lodash');

module.exports = function validatePostInput(data) {
  const errors = {};

  const text = _.isEmpty(data.text) ? '' : data.text;

  if (!Validator.isLength(text, { min: 10, max: 300 })) {
    errors.text = 'Post must be between 10 and 300 characters';
  }

  if (Validator.isEmpty(text)) {
    errors.text = 'Text field is required';
  }

  return {
    errors,
    isValid: _.isEmpty(errors),
  };
};
