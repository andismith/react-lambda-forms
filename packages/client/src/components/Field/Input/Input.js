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
  value,
}) => {
  return (
    <div className={styles.container}>
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
        value={value}
      />
      {(errors || []).map(error => (
        <span className={styles.message} key={error.message}>
          {error.message}
        </span>
      ))}
    </div>
  );
};

Input.defaultProps = {
  autoComplete: 'off',
};

Input.displayName = 'Input';

export default Input;
