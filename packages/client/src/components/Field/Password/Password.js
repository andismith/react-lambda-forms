import React, { useState } from 'react';
import classNames from 'classnames';

import styles from './Password.module.scss';

const Password = ({
  autoComplete,
  errors,
  handleChange,
  id,
  name,
  validation,
  value,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <React.Fragment>
      <input
        autoComplete={autoComplete}
        className={classNames(
          styles.input,
          errors && errors.length && styles.error
        )}
        id={id || name}
        maxLength={(validation && validation.maxLength) || undefined}
        name={name}
        onChange={handleChange}
        type={isVisible ? 'text' : 'password'}
        value={value}
      />
      <button
        className={styles.button}
        onClick={() => setIsVisible(!isVisible)}
        type="button"
      >
        {isVisible ? 'Hide' : 'Show'}
      </button>
    </React.Fragment>
  );
};

Password.defaultProps = {
  autoComplete: 'current-password',
};

Password.displayName = 'Password';

export default Password;
