import React from 'react';
import { shallow } from 'enzyme';

import ContactPage from './ContactPage';

describe('Contact page', () => {
  it('renders a FormContainer', () => {
    const wrapper = shallow(<ContactPage />);
    expect(wrapper.find('FormContainer').exists()).toBe(true);
  });
});
