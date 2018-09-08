import React from 'react';
import { shallow } from 'enzyme';
import HelloWorld from '../../components/HelloWorld';

test('should correctly render Greeter', () => {
  const wrapper = shallow(<HelloWorld />);
  expect(wrapper).toMatchSnapshot();
});