export default {
  buttons: [
    {
      text: 'Submit',
      type: 'submit',
    },
  ],
  description: `Example contact us form`,
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
      name: 'password',
      type: 'password',
      validation: {
        isRequired: true,
        minLength: 10,
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
    {
      name: 'query',
      options: [
        {
          value: 'GENERAL',
          title: 'General',
        },
        {
          value: 'ENQUIRY',
          title: 'Specific Enquiry',
        },
        {
          value: 'QUESTION',
          title: 'Question for Andi',
        },
      ],
      type: 'select',
      validation: {
        isRequired: true,
      },
    },
    {
      name: 'terms',
      type: 'checkbox',
      validation: {
        isRequired: true,
      },
      value: true,
    },
  ],
  title: 'Contact us',
};
