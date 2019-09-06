import React from 'react';

const Input = ({ autoComplete, handleChange, id, isDisabled, name, value }) => {
  return (
    <input
      autoComplete={autoComplete}
      disabled={isDisabled}
      id={id || name}
      name={name}
      onChange={handleChange}
      value={value}
    />
  );
};

Input.defaultProps = {
  autoComplete: 'off',
};

Input.displayName = 'Input';

export default Input;
