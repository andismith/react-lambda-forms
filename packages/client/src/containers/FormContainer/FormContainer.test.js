import React from 'react';
import { shallow } from 'enzyme';

import FormContainer from './FormContainer';

describe('Form container', () => {
  it('renders a Form', () => {
    const wrapper = shallow(<FormContainer />);
    expect(wrapper.find('Form').exists()).toBe(true);
  });
});
