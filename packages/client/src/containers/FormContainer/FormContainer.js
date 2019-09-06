import React, { useState } from 'react';

import Form from './../../components/Form/Form';

import { post } from './../../utils/fetch';

const FormContainer = ({ endpoint, ...config }) => {
  const [state, setState] = useState({ message: '' });
  const handleSubmit = async values => {
    const result = await post(endpoint, values);
    setState(result);
  };

  return (
    <Form
      {...config}
      handleSubmit={handleSubmit}
      submittedMessage={state.message}
    />
  );
};

FormContainer.displayName = 'FormContainer';

export default FormContainer;