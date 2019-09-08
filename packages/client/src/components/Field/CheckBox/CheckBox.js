import React from 'react';
import classNames from 'classnames';

import styles from './CheckBox.module.scss';

const CheckBox = ({ checked, errors, handleChange, id, name, value }) => {
  return (
    <input
      checked={checked}
      className={classNames(
        styles.checkbox,
        errors && errors.length && styles.error
      )}
      id={id || name}
      name={name}
      onChange={handleChange}
      type="checkbox"
      value={value}
    />
  );
};

CheckBox.defaultProps = {
  value: false,
};

CheckBox.displayName = 'CheckBox';

export default CheckBox;
