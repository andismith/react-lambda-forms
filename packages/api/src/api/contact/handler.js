import validateForm from 'forms-shared/src/utils/validation';
import config from 'forms-shared/config/contact';

export const post = (event, context, callback) => {
  const data = JSON.parse(event.body || '{}');

  const errors = validateForm(config.fields, data);

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: Object.keys(errors).length
        ? 'Invalid Submission'
        : 'Form Submitted',
      data,
      errors,
    }),
  };

  callback(null, response);
};
