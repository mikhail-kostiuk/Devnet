const Validator = require('validator');
const _ = require('lodash');

module.exports = function validateEducationInput(data) {
  const errors = {};

  const school = _.isEmpty(data.school) ? '' : data.school;
  const degree = _.isEmpty(data.degree) ? '' : data.degree;
  const fieldofstudy = _.isEmpty(data.fieldofstudy) ? '' : data.fieldofstudy;
  const from = _.isEmpty(data.from) ? '' : data.from;

  if (Validator.isEmpty(school)) {
    errors.school = 'School field is required';
  }

  if (Validator.isEmpty(degree)) {
    errors.degree = 'Degree field is required';
  }

  if (Validator.isEmpty(fieldofstudy)) {
    errors.fieldofstudy = 'Field of study field is required';
  }

  if (Validator.isEmpty(from)) {
    errors.from = 'From date field is required';
  }

  return {
    errors,
    isValid: _.isEmpty(errors),
  };
};
