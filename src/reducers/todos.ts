import Todo from '../models/Todo';
import { ActionTypes, Action } from '../actions/todos';

export type State = Todo[];

export const initialState: State = [];

export const reducer = (state: State = initialState, action: Action): State => {
  switch(action.type) {
    case ActionTypes.ADD_TODO:
      return [
        ...state, 
        action.payload.todo
      ];
    case ActionTypes.TOGGLE_TODO:
      const { todoId } = action.payload;
      return [
        ...state.map(todo => todo.id === todoId ? { ...todo, done: !todo.done} : todo)
      ];
    default:
      return state;
  }
};