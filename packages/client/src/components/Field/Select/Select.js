import React from 'react';
import classNames from 'classnames';

import styles from './Select.module.scss';

const Select = ({
  errors,
  handleChange,
  id,
  name,
  options,
  validation,
  value,
}) => {
  const getRenderedOptions = source => {
    if (!Array.isArray(source)) {
      return <option />;
    }

    return source.map(option => {
      if (typeof option === 'string') {
        return <option key={option}>{option}</option>;
      }

      return (
        <option key={option.value} value={option.value}>
          {option.title || option.value}
        </option>
      );
    });
  };

  return (
    <select
      className={classNames(
        styles.select,
        errors && errors.length && styles.error
      )}
      id={id || name}
      name={name}
      onChange={handleChange}
      value={value}
    >
      <option key="none" value="">
        {validation && validation.isRequired ? '- Select -' : '- None -'}
      </option>
      {getRenderedOptions(options)}
    </select>
  );
};

Select.defaultProps = {
  value: false,
};

Select.displayName = 'Select';

export default Select;
