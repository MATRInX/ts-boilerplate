import * as todoActions from '../../actions/todos';

test('should properly set addTodo action object', () => {
  const name: string = 'Sample todo action';
  const action = todoActions.addTodo(name);
  expect(action).toEqual({
    type: todoActions.ActionTypes.ADD_TODO,
    payload: {
      todo: {
        id: expect.any(Number),
        name,
        done: false,
      }
    }
  });
});

test('should properly set toggleTodo action object', () => {
  const todoId: number = 123;
  const action = todoActions.toggleTodo(todoId);
  expect(action).toEqual({
    type: todoActions.ActionTypes.TOGGLE_TODO,
    payload: {
      todoId
    }
  });
});