import { useState } from 'react';

import validateForm from 'forms-shared/src/utils/validation';

const useForm = (initialState, callback, fields) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleButton = event => {
    if (event) {
      event.preventDefault();
    }

    const validation = validateForm(fields, values);
    setErrors(validation);

    if (!Object.keys(validation).length) {
      setHasSubmitted(true);
      callback(values);
    }
  };

  const handleChange = event => {
    event.persist();
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    setValues(values => ({ ...values, [fieldName]: fieldValue }));
  };

  return {
    errors,
    handleButton,
    handleChange,
    values,
    hasSubmitted,
  };
};

export default useForm;
