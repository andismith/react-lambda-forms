import React from 'react';
import { shallow } from 'enzyme';

import Password from './Password';

describe('Password component', () => {
  let mockProps = {
    name: 'test',
  };

  it('renders a input component', () => {
    const wrapper = shallow(<Password {...mockProps} />);
    expect(wrapper.find('input').exists()).toBe(true);
  });

  it('sets the input box type to password', () => {
    let wrapper = shallow(<Password {...mockProps} />);
    expect(wrapper.find('.input').prop('type')).toBe('password');
  });

  it('sets the input max length if specified', () => {
    let wrapper = shallow(<Password {...mockProps} />);
    expect(wrapper.find('.input').prop('maxLength')).toBe(undefined);

    wrapper = shallow(
      <Password {...mockProps} validation={{ maxLength: 100 }} />
    );
    expect(wrapper.find('.input').prop('maxLength')).toBe(100);
  });

  it('sets the input to autocomplete if specified', () => {
    let wrapper = shallow(<Password {...mockProps} />);
    expect(wrapper.find('.input').prop('autoComplete')).toBe(
      'current-password'
    );

    wrapper = shallow(
      <Password {...mockProps} autoComplete={'new-password'} />
    );
    expect(wrapper.find('.input').prop('autoComplete')).toBe('new-password');
  });
});
