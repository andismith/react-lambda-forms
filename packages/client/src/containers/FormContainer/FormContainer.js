import React, { useState } from 'react';

import Form from './../../components/Form/Form';
import useForm from './useForm';

import { post } from './../../utils/fetch';

const FormContainer = ({ endpoint, ...config }) => {
  const [submitStatus, setSubmitStatus] = useState(undefined);

  const handleSubmit = async values => {
    // if the response is quick, don't show the intermediary status to avoid display flicker
    const submitFlicker = setTimeout(() => setSubmitStatus('Submitting'), 500);

    const result = await post(endpoint, values);
    clearTimeout(submitFlicker);
    setSubmitStatus(result.success ? 'Success' : 'Invalid');

    if (!result.success) {
      setHasSubmitted(false);
      setErrors(result.errors);
    }
  };

  const {
    errors,
    handleFormSubmit,
    handleChange,
    hasSubmitted,
    setErrors,
    setHasSubmitted,
    values,
  } = useForm({}, handleSubmit, config.fields);

  return (
    <Form
      errors={errors}
      handleChange={handleChange}
      handleSubmit={handleFormSubmit}
      hasSubmitted={hasSubmitted}
      submitStatus={submitStatus}
      values={values}
      {...config}
    />
  );
};

FormContainer.displayName = 'FormContainer';

export default FormContainer;
