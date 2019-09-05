import React, { useState } from 'react';

import Form from './../../components/Form/Form';

import { post } from './../../utils/fetch';

const ContactForm = () => {
  const [state, setState] = useState({ message: '' });
  const handleSubmit = async (event) => {
    event.preventDefault();

    const result = await post('contact');
    setState(result);
  };

  return (
    <Form handleSubmit={handleSubmit} message={state.message} />
  );
};

ContactForm.displayName = 'ContactForm';

export default ContactForm;
