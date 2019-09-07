export default {
  buttons: [
    {
      text: 'Submit',
      type: 'submit',
    },
  ],
  description: 'Contact us via this form!',
  endpoint: 'contact',
  fields: [
    {
      name: 'name',
      type: 'text',
      validation: {
        isRequired: true,
      },
    },
    {
      name: 'email',
      title: 'Email address',
      type: 'email',
      validation: {
        isRequired: true,
        isValidEmail: true,
      },
    },
    {
      name: 'message',
      type: 'textarea',
      validation: {
        isRequired: true,
        maxLength: 150,
        minLength: 20,
      },
    },
  ],
  title: 'Contact us',
};
