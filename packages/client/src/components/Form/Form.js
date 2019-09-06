import React from 'react';
import Field from "../Field/Field";

const Form = ({ handleSubmit, message }) => {

  return (
    <form method="post" onSubmit={handleSubmit}>
      <h1>Form</h1>
      <p>{message}</p>
      <Field>
        <Field.Label id="hello" title="Hello" />
        <Field.Input name="hello" />
      </Field>
      <button type="submit">Submit</button>
    </form>
  );
};

Form.displayName = 'Form';

export default Form;
