import React from 'react';
import { shallow } from 'enzyme';

import CheckBox from './CheckBox';

describe('CheckBox component', () => {
  let mockProps = {
    name: 'test',
  };

  it('renders a checkbox component', () => {
    const wrapper = shallow(<CheckBox {...mockProps} />);
    expect(wrapper.find('input').exists()).toBe(true);
    expect(wrapper.find('input').prop('type')).toBe('checkbox');
  });
});
