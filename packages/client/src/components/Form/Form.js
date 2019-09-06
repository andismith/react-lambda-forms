import React from 'react';
import Field from '../Field/Field';
import useForm from './useForm';

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
    <button key={`button-${button.text}`} type={button.type}>
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
    <form method="post" onSubmit={handleButton}>
      <h1>{title}</h1>
      <p className="description">{description}</p>
      {submittedMessage && (
        <p className="submittedMessage">Result: {submittedMessage}</p>
      )}

      {renderFields(fields, values, handleChange, hasSubmitted)}
      {renderButtons(buttons)}
    </form>
  );
};

Form.displayName = 'Form';

export default Form;
