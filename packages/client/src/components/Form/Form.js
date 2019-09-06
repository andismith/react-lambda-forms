import React from 'react';
import Field from '../Field/Field';

const components = {
  text: Field.Input,
};

const renderFields = fields =>
  (fields || []).map(field => {
    const Component = components[field.type];

    return (
      <Field key={`input-${field.name}`}>
        <Field.Label {...field} />
        <Component {...field} />
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
}) => (
  <form method="post" onSubmit={handleSubmit}>
    <h1>{title}</h1>
    <p className="description">{description}</p>
    {submittedMessage && (
      <p className="submittedMessage">Result: {submittedMessage}</p>
    )}

    {renderFields(fields)}
    {renderButtons(buttons)}
  </form>
);

Form.displayName = 'Form';

export default Form;
