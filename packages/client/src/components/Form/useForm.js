import { useState } from 'react';

const useForm = (initialState, callback) => {
  const [values, setValues] = useState(initialState);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleButton = event => {
    if (event) {
      event.preventDefault();
    }
    setHasSubmitted(true);
    callback(values);
  };

  const handleChange = event => {
    event.persist();
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    setValues(values => ({ ...values, [fieldName]: fieldValue }));
  };

  return {
    handleButton,
    handleChange,
    values,
    hasSubmitted,
  };
};

export default useForm;
