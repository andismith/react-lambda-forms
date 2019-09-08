import validateForm from 'forms-shared/src/utils/validation';
import config from 'forms-shared/config/contact';

export const post = (event, context, callback) => {
  const data = JSON.parse(event.body || '{}');
  const errors = validateForm(config.fields, data);
  const statusCode = Object.keys(errors).length ? 400 : 200;

  const response = {
    statusCode,
    body: JSON.stringify({
      data,
      errors,
    }),
  };

  callback(null, response);
};
