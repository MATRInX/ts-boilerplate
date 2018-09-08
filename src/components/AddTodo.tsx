import React, { FormEvent } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todos';
import { AddTodoAction } from '../actions/todos';

// export interface AddTodoProps {
//   handleSubmit: (name: string) => void
// };
type AddTodoStateProps = null;

interface AddTodoDispatchProps {
  handleSubmit: (name: string) => void
}

type AddTodoProps = AddTodoStateProps & AddTodoDispatchProps;

export interface AddTodoState {
  value: string
};

export class AddTodo extends React.Component<AddTodoProps, AddTodoState>{
  constructor(props: AddTodoProps){
    super(props);
    this.state = { value: ''};
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
      <form onSubmit={this.onSubmit}>
        <input type="text" value={this.state.value} onChange={this.onChange}/>
        <button type="submit">Add todo!</button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch<AddTodoAction> , ownProps: AddTodoProps): AddTodoDispatchProps =>  ({
  handleSubmit: (name: string) => dispatch(addTodo(name))
})

//export default connect<AddTodoStateProps, AddTodoDispatchProps, AddTodoProps>
export default connect<AddTodoStateProps, AddTodoDispatchProps, any>
  (null, mapDispatchToProps)(AddTodo);