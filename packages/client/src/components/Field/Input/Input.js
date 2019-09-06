import React from 'react';

const Input = ({ autoComplete, id, isDisabled, name, value }) => {
  return (
      <input
        autoComplete={autoComplete}
        disabled={isDisabled}
        id={id || name}
        name={name}
        value={value}
      />
  );
};

Input.defaultProps = {
  autoComplete: 'off',
};

Input.displayName = 'Input';

export default Input;
