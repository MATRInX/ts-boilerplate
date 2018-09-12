import React from 'react';
import { shallow } from 'enzyme';
import { TodoList } from '../../components/TodoList';
import Todo from '../../models/Todo';

const dummyTodos: Todo[] = [
  {id: 1, name: 'testing1', done: false},
  {id: 2, name: 'testing2', done: true}
];

test('should correctly render empty todolist', () => {
  const onTodoClick = jest.fn();
  const wrapper = shallow(<TodoList todos={[]} onTodoClick={onTodoClick} />);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render dummy todos list', () => {
  const onTodoClick = jest.fn();
  const wrapper = shallow(<TodoList todos={dummyTodos} onTodoClick={onTodoClick} />);
  expect(wrapper).toMatchSnapshot();
})

test('should correctly handle click on todo item', () => {
  const onTodoClick = jest.fn();
  let wrapper = shallow(<TodoList todos={dummyTodos} onTodoClick={onTodoClick} />);
  wrapper.find('div').at(1).simulate('click');
  expect(onTodoClick).toHaveBeenCalledWith(1);
})