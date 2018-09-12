import * as todoActions from '../../actions/todos';
import * as todoReducer from '../../reducers/todos';
import Todo from '../../models/Todo';

test('should set default state', () => {
  const action: todoActions.Action = { type: todoActions.ActionTypes.INIT};
  const state = todoReducer.reducer(undefined, action);
  expect(state).toEqual([]);
});

test('should correctly add todo item to state', () => {
  const name: string = 'sample toto item';
  const action: todoActions.Action = {
    type: todoActions.ActionTypes.ADD_TODO,
    payload: {
      todo: {
        id: 0,
        name,
        done: false
      }
    }
  };
  const state = todoReducer.reducer(undefined, action);
  expect(state).toEqual([
      {
        id: 0,
        name,
        done: false
      }
    ]);
});

test('should correctly toggle selected item done status', () => {
  const todoId: number = 1;
  const defaultState: Todo[] = [
    { id: 0, name: 'First item', done: false },
    { id: 1, name: 'Second item', done: false },
  ];
  const action: todoActions.Action = {
    type: todoActions.ActionTypes.TOGGLE_TODO,
    payload: { todoId }
  };
  const state = todoReducer.reducer(defaultState, action);
  expect(state).toEqual([
    defaultState[0],
    {...defaultState[1], done: true}
  ]);
});