import React from 'react';
import classNames from 'classnames';
import AutoTextArea from 'react-textarea-autosize';

import styles from './TextArea.module.scss';

const TextArea = ({
  errors,
  handleChange,
  id,
  maxRows,
  minRows,
  name,
  value,
}) => {
  return (
    <AutoTextArea
      className={classNames(styles.textArea, errors && styles.error)}
      id={id || name}
      maxRows={maxRows}
      minRows={minRows}
      name={name}
      onChange={handleChange}
      value={value}
    />
  );
};

TextArea.defaultProps = {
  maxRows: 30,
  minRows: 2,
};

TextArea.displayName = 'TextArea';

export default TextArea;
