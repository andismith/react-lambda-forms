import React from 'react';
import { shallow } from 'enzyme';

import Form from './Form';

describe('Form component', () => {
  it('renders a form element', () => {
    const wrapper = shallow(<Form />);
    expect(wrapper.find('form').exists()).toBe(true);
  });

  it('renders a button with type "submit"', () => {
    const wrapper = shallow(<Form />);
    expect(wrapper.find('button[type="submit"]').exists()).toBe(true);
  });

  it('renders a message when supplied', () => {
    const mockMessage = 'Hello';
    const wrapper = shallow(<Form message={mockMessage} />);
    expect(wrapper.find('p').text()).toBe(mockMessage);
  });


  it('calls the passed submit function when the form is submitted', () => {
    const mockSubmit = jest.fn(() => {});
    const wrapper = shallow(<Form handleSubmit={mockSubmit} />);
    const form = wrapper.find('form');
    form.simulate('submit');
    expect(mockSubmit).toHaveBeenCalled();
  });
});
