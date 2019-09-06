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
    },
    {
      name: 'email',
      title: 'Email address',
      type: 'text',
    },
    {
      name: 'message',
      type: 'text',
    },
  ],
  title: 'Contact us',
};
