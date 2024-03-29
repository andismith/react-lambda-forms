import React from 'react';

import CheckBox from './CheckBox/CheckBox';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import Input from './Input/Input';
import Label from './Label/Label';
import Password from './Password/Password';
import Select from './Select/Select';
import TextArea from './TextArea/TextArea';

import styles from './Field.module.scss';

class Field extends React.Component {
  static displayName = 'Field';

  static CheckBox = CheckBox;
  static ErrorMessage = ErrorMessage;
  static Input = Input;
  static Label = Label;
  static Password = Password;
  static Select = Select;
  static TextArea = TextArea;

  render() {
    return (
      <fieldset className={styles.container}>
        <div className={styles.field}>{this.props.children}</div>
      </fieldset>
    );
  }
}

export default Field;
