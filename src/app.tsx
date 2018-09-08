import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Greeter } from './components/Greeter';
import { HelloWorld } from './components/HelloWorld';
import configureStore from './store/configureStore';
import { addTodo } from './actions/todos';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const store = configureStore();
store.dispatch(addTodo('testowa'));
store.dispatch(addTodo('druga testowa'));

const tsx: JSX.Element = (
  <Provider store={store}>
    <div>
      <HelloWorld />
      <Greeter name={'Marcin'}/>
      <AddTodo />
      <TodoList />
    </div>
  </Provider>
)

ReactDOM.render(tsx, document.getElementById('app'));