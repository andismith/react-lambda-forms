import React from 'react';

import styles from './Input.module.scss';

const Input = ({ autoComplete, handleChange, id, isDisabled, name, value }) => {
  return (
    <input
      autoComplete={autoComplete}
      className={styles.input}
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
