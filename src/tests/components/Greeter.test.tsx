import React from 'react';
import { shallow } from 'enzyme';
import Greeter from '../../components/Greeter';

test('should correctly render Greeter', () => {
  const wrapper = shallow(<Greeter />);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render Greeter with provided name', () => {
  const name: string = 'Marcin';
  const wrapper = shallow(<Greeter name={name}/>);
  expect(wrapper).toMatchSnapshot();
});