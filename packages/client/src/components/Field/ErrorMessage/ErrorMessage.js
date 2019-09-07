import React from 'react';

import styles from './ErrorMessage.module.scss';

const ErrorMessage = ({ errors }) => {
  return (
    <div className={styles.error}>
      {(errors || []).map(error => (
        <span className={styles.message} key={error.message}>
          {error.message}
        </span>
      ))}
    </div>
  );
};

ErrorMessage.displayName = 'ErrorMessage';

export default ErrorMessage;
