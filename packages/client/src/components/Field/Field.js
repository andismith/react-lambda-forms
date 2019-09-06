import React from 'react';

import Input from './Input/Input';
import Label from './Label/Label';

import styles from './Field.module.scss';

class Field extends React.Component {
  static displayName = 'Field';

  static Input = Input;
  static Label = Label;

  render() {
    return (
      <fieldset className={styles.container}>
        <div className={styles.field}>{this.props.children}</div>
      </fieldset>
    );
  }
}

export default Field;
