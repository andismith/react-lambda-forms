import React from 'react';
import { shallow } from 'enzyme';

import Field from './Field';

describe('Field component', () => {
  it('renders a fieldset element', () => {
    const wrapper = shallow(<Field />);
    expect(wrapper.find('fieldset').exists()).toBe(true);
  });

  it('renders the child field', () => {
    const wrapper = shallow(<Field><Field.Input /></Field>);
    expect(wrapper.find('Input').exists()).toBe(true);
  });
});
