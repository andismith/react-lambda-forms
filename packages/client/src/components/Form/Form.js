import React from 'react';

import Button from '../Button/Button';
import Field from '../Field/Field';

import styles from './Form.module.scss';

const components = {
  checkbox: Field.CheckBox,
  email: Field.Input,
  password: Field.Password,
  text: Field.Input,
  textarea: Field.TextArea,
};

const renderFields = (fields, values, errors, handleChange, isDisabled) =>
  (fields || []).map(field => {
    const Component = components[field.type];

    return (
      <Field key={`input-${field.name}`}>
        <Field.Label {...field} />
        <div className={styles.input}>
          <Component
            errors={errors[field.name]}
            handleChange={handleChange}
            isDisabled={isDisabled}
            value={values[field.name] || ''}
            {...field}
          />
          <Field.ErrorMessage errors={errors[field.name]} />
        </div>
      </Field>
    );
  });

const renderButtons = (buttons, isDisabled) =>
  (buttons || []).map(button => (
    <Button isDisabled={isDisabled} key={`button-${button.text}`} {...button} />
  ));

const Form = ({
  buttons,
  description,
  errors,
  fields,
  handleChange,
  handleSubmit,
  hasSubmitted,
  submitStatus,
  title,
  values,
}) => {
  return (
    <form className={styles.form} method="post" onSubmit={handleSubmit}>
      <h1>{title}</h1>
      <p className={styles.description}>{description}</p>
      {submitStatus && <p className={styles.message}>Result: {submitStatus}</p>}

      <div>
        {renderFields(fields, values, errors, handleChange, hasSubmitted)}
      </div>

      {renderButtons(buttons, hasSubmitted)}
    </form>
  );
};

Form.displayName = 'Form';

export default Form;
