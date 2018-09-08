import React, { SFC } from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';

export const history = createHistory();

const AppRouter: SFC<{}> = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={TodoList} />
      <Route path="/add" component={AddTodo} />      
    </Switch>
  </Router>
);

export default AppRouter;