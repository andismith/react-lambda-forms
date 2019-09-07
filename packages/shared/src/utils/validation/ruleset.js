import isNotEmpty from './isNotEmpty';

const validationRules = [
  {
    rule: 'isRequired',
    test: (field, value) => isNotEmpty(value),
    message: field => `${field.title} is required`,
  },
];

export default validationRules;
