import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

describe('Button component', () => {
  it('renders a button element', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('button').exists()).toBe(true);
  });

  it('renders a button with type "submit" when supplied', () => {
    const mockButton = { text: 'submit', type: 'submit' };
    const wrapper = shallow(<Button {...mockButton} />);
    expect(wrapper.find('button[type="submit"]').exists()).toBe(true);
  });
});
