import React from 'react';

import Field from '../Field/Field';
import useForm from './useForm';

import styles from './Form.module.scss';

const components = {
  text: Field.Input,
};

const renderFields = (fields, values, handleChange, isDisabled) =>
  (fields || []).map(field => {
    const Component = components[field.type];

    return (
      <Field key={`input-${field.name}`}>
        <Field.Label {...field} />
        <Component
          handleChange={handleChange}
          isDisabled={isDisabled}
          value={values[field.name] || ''}
          {...field}
        />
      </Field>
    );
  });

const renderButtons = buttons =>
  (buttons || []).map(button => (
    <button
      className={styles.button}
      key={`button-${button.text}`}
      type={button.type}
    >
      {button.text}
    </button>
  ));

const Form = ({
  buttons,
  description,
  fields,
  handleSubmit,
  submittedMessage,
  title,
}) => {
  const { handleButton, handleChange, hasSubmitted, values } = useForm(
    {},
    handleSubmit
  );

  return (
    <form className={styles.form} method="post" onSubmit={handleButton}>
      <h1>{title}</h1>
      <p className={styles.description}>{description}</p>
      {submittedMessage && (
        <p className={styles.message}>Result: {submittedMessage}</p>
      )}

      <div>{renderFields(fields, values, handleChange, hasSubmitted)}</div>

      {renderButtons(buttons)}
    </form>
  );
};

Form.displayName = 'Form';

export default Form;
