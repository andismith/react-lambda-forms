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
    const wrapper = shallow(<Form submitStatus={mockMessage} />);
    expect(wrapper.find('.message').text()).toBe('Result: ' + mockMessage);
  });

  it('renders a field when supplied', () => {
    const mockField = [{ name: 'name', type: 'text' }];
    const wrapper = shallow(
      <Form fields={mockField} errors={{}} values={{}} />
    );
    expect(wrapper.find('Label').exists()).toBe(true);
    expect(wrapper.find('Input').exists()).toBe(true);
  });

  it('calls the passed submit function when the form is submitted', () => {
    const mockSubmit = jest.fn(() => {});
    const wrapper = shallow(<Form handleSubmit={mockSubmit} />);
    const form = wrapper.find('form');
    form.simulate('submit');
    expect(mockSubmit).toHaveBeenCalled();
  });
});
