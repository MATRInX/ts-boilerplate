import React, { FormEvent } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todos';
import { AddTodoAction } from '../actions/todos';
import { Link } from 'react-router-dom';

type AddTodoStateProps = null;

interface AddTodoDispatchProps {
  handleSubmit: (name: string) => void
}

interface AddTodoExtraProps {
  defaultValue?: string
}

type AddTodoProps = AddTodoStateProps & AddTodoDispatchProps & AddTodoExtraProps;

export interface AddTodoState {
  value: string
};

export class AddTodo extends React.Component<AddTodoProps, AddTodoState>{
  constructor(props: AddTodoProps){
    super(props);
    this.state = { value: this.props.defaultValue ? this.props.defaultValue : ''};
  }

  onChange = (e: FormEvent<EventTarget>):void => {
    e.preventDefault();
    const target = e.target as HTMLInputElement;
    const name: string = target.value;
    this.setState({ value: name });
  }

  onSubmit = (e: FormEvent<EventTarget>): void => {
    e.preventDefault();
    this.props.handleSubmit(this.state.value);
    this.setState({ value: ''});
  }

  render() {
    return (
      <div>
        <Link to="/"><h1>Todo list!</h1></Link>
        <form onSubmit={this.onSubmit}>
          <input type="text" value={this.state.value} onChange={this.onChange}/>
          <button type="submit">Add todo!</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch<AddTodoAction> , ownProps: AddTodoProps): AddTodoDispatchProps =>  ({
  handleSubmit: (name: string) => dispatch(addTodo(name))
})

//export default connect<AddTodoStateProps, AddTodoDispatchProps, AddTodoProps>
export default connect<AddTodoStateProps, AddTodoDispatchProps, any>
  (null, mapDispatchToProps)(AddTodo);