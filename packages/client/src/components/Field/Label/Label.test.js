import React from 'react';
import { shallow } from 'enzyme';

import Label from './Label';

describe('Field Label component', () => {
  it('renders a label element', () => {
    const wrapper = shallow(<Label />);
    expect(wrapper.find('label').exists()).toBe(true);
  });
});
