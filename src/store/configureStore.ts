import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import * as fromTodo from '../reducers/todos';
//import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//const enhancers = composeWithDevTools( window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()();

export interface State {
  todos: fromTodo.State
}

// Store creation
export default () => {    
    const store = createStore(
        combineReducers<State>({
          todos: fromTodo.reducer
        }),
        composeEnhancers(applyMiddleware(thunk))
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
}