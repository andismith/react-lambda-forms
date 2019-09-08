import { useState } from 'react';

import clean from '../../utils/clean';
import validateForm, { validateField } from 'forms-shared/src/utils/validation';

const useForm = (initialState, callback, fields) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [hasTriedToSubmit, setHasTriedToSubmit] = useState(false);

  const handleButton = event => {
    if (event) {
      event.preventDefault();
    }

    const validation = validateForm(fields, values);
    setErrors(validation);
    setHasTriedToSubmit(true);

    if (!Object.keys(validation).length) {
      setHasSubmitted(true);
      callback(values);
    }
  };

  const handleChange = event => {
    event.persist();
    const fieldName = event.target.name;
    let fieldValue = event.target.value;

    if (event.target.type === 'checkbox') {
      fieldValue = event.target.checked ? event.target.value : undefined;
    }

    setValues(values => ({ ...values, [fieldName]: fieldValue }));

    // only set errors once the user has submitted the form once
    if (hasTriedToSubmit) {
      const config = fields.find(field => field.name === fieldName);
      const validation = validateField(config, fieldValue);

      setErrors(
        clean({
          ...errors,
          [fieldName]: validation.length ? validation : undefined,
        })
      );
    }
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
