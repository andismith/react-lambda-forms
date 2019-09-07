import React from 'react';
import capitalizeFirstLetter from 'forms-shared/src/utils/capitalizeFirstLetter';

import styles from './Label.module.scss';

const Label = ({ id, name, title }) => {
  return (
    <label className={styles.label} htmlFor={id || name}>
      {title || capitalizeFirstLetter(name)}
    </label>
  );
};

Label.displayName = 'Label';

export default Label;
