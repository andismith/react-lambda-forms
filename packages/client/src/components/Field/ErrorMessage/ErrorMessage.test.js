import React from 'react';
import { shallow } from 'enzyme';

import ErrorMessage from './ErrorMessage';

describe('ErrorMessage component', () => {
  it('renders a ErrorMessage component', () => {
    const wrapper = shallow(<ErrorMessage />);
    expect(wrapper.find('div').exists()).toBe(true);
  });
});
