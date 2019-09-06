import React from 'react';
import { shallow } from 'enzyme';

import Form from './Form';

describe('Form component', () => {
  it('renders a form element', () => {
    const wrapper = shallow(<Form />);
    expect(wrapper.find('form').exists()).toBe(true);
  });

  it('renders a title when supplied', () => {
    const mockTitle = 'Mock Title';
    const wrapper = shallow(<Form title={mockTitle} />);
    expect(wrapper.find('h1').text()).toBe(mockTitle);
  });

  it('renders a description when supplied', () => {
    const mockDescription = 'Mock Description';
    const wrapper = shallow(<Form description={mockDescription} />);
    expect(wrapper.find('.description').text()).toBe(mockDescription);
  });

  it('renders a submitted message when supplied', () => {
    const mockMessage = 'Mock Message';
    const wrapper = shallow(<Form submittedMessage={mockMessage} />);
    expect(wrapper.find('.submittedMessage').text()).toBe(
      'Result: ' + mockMessage
    );
  });

  it('renders a field when supplied', () => {
    const mockField = [{ name: 'name', type: 'text' }];
    const wrapper = shallow(<Form fields={mockField} />);
    expect(wrapper.find('Label').exists()).toBe(true);
    expect(wrapper.find('Input').exists()).toBe(true);
  });

  it('renders a button with type "submit" when supplied', () => {
    const mockButton = [{ text: 'submit', type: 'submit' }];
    const wrapper = shallow(<Form buttons={mockButton} />);
    expect(wrapper.find('button[type="submit"]').exists()).toBe(true);
  });

  it('calls the passed submit function when the form is submitted', () => {
    const mockSubmit = jest.fn(() => {});
    const wrapper = shallow(<Form handleSubmit={mockSubmit} />);
    const form = wrapper.find('form');
    form.simulate('submit');
    expect(mockSubmit).toHaveBeenCalled();
  });
});
