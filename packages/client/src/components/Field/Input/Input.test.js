import React from 'react';
import { shallow } from 'enzyme';

import Input from './Input';

describe('Field Input component', () => {
  it('renders a input element', () => {
    const wrapper = shallow(<Input />);
    expect(wrapper.find('input').exists()).toBe(true);
  });
});
