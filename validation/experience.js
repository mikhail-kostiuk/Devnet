const Validator = require('validator');
const _ = require('lodash');

module.exports = function validateExperienceInput(data) {
  const errors = {};

  const title = _.isEmpty(data.title) ? '' : data.title;
  const company = _.isEmpty(data.company) ? '' : data.company;
  const from = _.isEmpty(data.from) ? '' : data.from;

  if (Validator.isEmpty(title)) {
    errors.title = 'Job title field is required';
  }

  if (Validator.isEmpty(company)) {
    errors.company = 'Company field is required';
  }

  if (Validator.isEmpty(from)) {
    errors.from = 'From date field is required';
  }

  return {
    errors,
    isValid: _.isEmpty(errors),
  };
};
