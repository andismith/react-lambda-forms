import React from 'react';

const Form = ({ handleSubmit, message }) => {

  return (
    <form method="post" onSubmit={handleSubmit}>
      <h1>Form</h1>
      <p>{message}</p>
      <button type="submit">Submit</button>
    </form>
  );
};

Form.displayName = 'Form';

export default Form;
