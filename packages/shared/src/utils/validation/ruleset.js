import isNotEmpty from './isNotEmpty';
import isValidEmail from './isValidEmail';
import isValidMaxLength from './isValidMaxLength';
import isValidMinLength from './isValidMinLength';

const validationRules = [
  {
    rule: 'isRequired',
    test: (field, value) => isNotEmpty(value),
    message: field => `${field.title} is required`,
  },
  {
    rule: 'isValidEmail',
    test: (validation, value = '') => isValidEmail(value),
    message: field => `${field.title} is an invalid email address`,
  },
  {
    rule: 'maxLength',
    test: (validation, value) => isValidMaxLength(value, validation.maxLength),
    message: field =>
      `${field.title} must be ${field.validation.maxLength} characters or less`,
  },
  {
    rule: 'minLength',
    test: (validation, value = '') =>
      isValidMinLength(value, validation.minLength),
    message: field =>
      `${field.title} must be ${field.validation.minLength} characters or more`,
  },
];

export default validationRules;
