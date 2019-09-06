import React from 'react';
import capitalizeFirstLetter from '../../../utils/capitalizeFirstLetter';

const Label = ({ id, name, title }) => {
  return (
    <label htmlFor={id || name}>
      {title || capitalizeFirstLetter(name)}
    </label>
  );
};

Label.displayName = 'Label';

export default Label;
