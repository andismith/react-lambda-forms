import React from 'react';
import classNames from 'classnames';

import styles from './Input.module.scss';

const Input = ({
  autoComplete,
  errors,
  handleChange,
  id,
  isDisabled,
  name,
  type,
  value,
}) => {
  return (
    <input
      autoComplete={autoComplete}
      className={classNames(
        styles.input,
        errors && errors.length && styles.error
      )}
      disabled={isDisabled}
      id={id || name}
      name={name}
      onChange={handleChange}
      type={type}
      value={value}
    />
  );
};

Input.defaultProps = {
  autoComplete: 'off',
};

Input.displayName = 'Input';

export default Input;
