import React from 'react';

import styles from './Button.module.scss';

const Button = ({ isDisabled, text, type }) => (
  <button className={styles.button} disabled={isDisabled} type={type}>
    {text}
  </button>
);

export default Button;
