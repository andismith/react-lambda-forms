import isNotEmpty from './isNotEmpty';
import isValidEmail from './isValidEmail';

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
];

export default validationRules;
