import capitalizeFirstLetter from './capitalizeFirstLetter';
import validationRules from './validation/ruleset';

export const validateField = (field, value) => {
  field.title = capitalizeFirstLetter(field.title || field.name);

  return validationRules.reduce((errors, validation) => {
    const { message, rule, test } = validation;
    if (
      field.validation &&
      field.validation[rule] &&
      !test(field.validation, value)
    ) {
      errors.push({
        message: message(field),
        rule,
      });
    }
    return errors;
  }, []);
};

export default (fields, values) =>
  (fields || []).reduce((errors, field) => {
    const fieldErrors = validateField(field, values[field.name]);
    if (fieldErrors.length > 0) {
      errors[field.name] = fieldErrors;
    }
    return errors;
  }, {});
