import React from 'react';

import Input from './Input/Input';
import Label from './Label/Label';

class Field extends React.Component {
  static displayName = 'Field';

  static Input = Input;
  static Label = Label;

  render() {
    return (
      <fieldset>
        <div>{this.props.children}</div>
      </fieldset>
    );
  }
}

export default Field;
