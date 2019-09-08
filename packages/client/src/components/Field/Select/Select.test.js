import React from 'react';
import { shallow } from 'enzyme';

import Select from './Select';

describe('Select component', () => {
  let mockProps = {};

  beforeEach(() => {
    mockProps = {
      name: 'test',
    };
  });

  it('renders a select component', () => {
    const wrapper = shallow(<Select {...mockProps} />);
    expect(wrapper.find('select').exists()).toBe(true);
  });

  it('populates the select box with options', () => {
    mockProps.options = ['red', 'green', 'blue'];

    let wrapper = shallow(<Select {...mockProps} />);

    expect(wrapper.find('.select').children()).toHaveLength(
      mockProps.options.length + 1
    );
  });

  it('populates the select box with options with values', () => {
    mockProps.options = [
      {
        title: 'Ruby Red',
        value: 'red',
      },
      {
        title: 'Emerald Green',
        value: 'green',
      },
      {
        title: 'Sapphire Blue',
        value: 'blue',
      },
    ];

    let wrapper = shallow(<Select {...mockProps} />);

    expect(wrapper.find('.select').children()).toHaveLength(
      mockProps.options.length + 1
    );
  });
});
