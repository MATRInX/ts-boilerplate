import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import Todo from '../models/Todo';
import * as fromTodo from '../reducers/todos';
import { toggleTodo, ToggleTodoAction } from '../actions/todos';
import { Link } from 'react-router-dom';

export interface TodoListStoreProps {
  todos: fromTodo.State
}

export interface TodoListDispatchProps {
  onTodoClick: (todoId: number) => void
}

type TodoListProps = TodoListStoreProps & TodoListDispatchProps;

interface TodoListState { }

export class TodoList extends React.Component<TodoListProps, TodoListState> {
constructor(props: TodoListProps){
  super(props);
}

  onTodoClick = (todoId: number): void => {
    this.props.onTodoClick(todoId);
  }

  render() {
    const { todos, onTodoClick } = this.props;
    return (
      <div>
        <Link to="/add"><h2>Add todos...</h2></Link>
        {
          this.props.todos.length > 0 ? (
            this.props.todos.map((todoItem: Todo) => 
            <div key={todoItem.id} onClick={() => this.onTodoClick(todoItem.id)}>
              {todoItem.name} <span>{todoItem.done ? 'is DONE' : 'has to be done!'}</span>
            </div>)
          ) : (
            <p>There is no items!</p>
          )
        }
      </div>
    )
  }
}

const mapStateToProps = (storeState: TodoListStoreProps, ownProps: TodoListProps) => ({ 
  todos: storeState.todos
});

const mapDispatchToProps = (dispatch: Dispatch<ToggleTodoAction>, ownProps: TodoListProps) => ({
  onTodoClick: (todoId: number) => dispatch(toggleTodo(todoId))
});

export default connect<TodoListStoreProps, TodoListDispatchProps, any, any>
  (mapStateToProps, mapDispatchToProps)(TodoList);