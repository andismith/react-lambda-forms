import React from 'react';
import { shallow } from 'enzyme';

import TextArea from './TextArea';

describe('TextArea component', () => {
  it('renders a TextArea component', () => {
    const wrapper = shallow(<TextArea />);
    expect(wrapper.find('TextareaAutosize').exists()).toBe(true);
  });
});
