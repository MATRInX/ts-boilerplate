import Todo from '../models/Todo';
import { ActionTypes, Action } from '../actions/todos';

export interface State {
  todos: Todo[]
};

export const initialState: State = {
  todos: []
};

export const reducer = (state: State = initialState, action: Action): State => {
  switch(action.type) {
    case ActionTypes.ADD_TODO:
      return {
        ...state, 
        todos: [...state.todos, action.payload.todo]
      };
    case ActionTypes.TOGGLE_TODO:
      const { todoId } = action.payload;
      return {
        ...state,
        todos: state.todos.map(todo => todo.id === todoId ? { ...todo, done: !todo.done} : todo)
      };
    default:
      return state;
  }
};