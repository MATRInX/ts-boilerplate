import React from 'react';
import { shallow } from 'enzyme';
import { AddTodo } from '../../components/AddTodo';
// import { wrap } from 'module';

let handleSubmit: jest.Mock;
let wrapper: any;
const defaultValue: string = 'Default value';

beforeEach(() => {
  handleSubmit = jest.fn();
  wrapper = shallow(<AddTodo handleSubmit={handleSubmit} defaultValue={defaultValue}/>);
})

test('should correctly render AddTodo component', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should set todo text on input change', () => {
  const value: string = 'Sample todo item.';
  expect(wrapper.state('value')).toBe(defaultValue);
  wrapper.find('input').simulate('change', { 
    target: { value },
    preventDefault: () => {} 
  });
  expect(wrapper.state('value')).toBe(value);
});

test('should submit form with valid data', () => {
  wrapper.find('form').simulate('submit', { preventDefault: () => {}});
  expect(handleSubmit).toHaveBeenCalledWith(defaultValue);
  expect(wrapper.state('value')).toBe('');
});