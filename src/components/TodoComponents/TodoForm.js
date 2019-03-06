import React, { Component } from "react";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ""
    };
  }
  onChange = event => {
    const { name } = event.target;
    this.setState({ [name]: event.target.value });
  };
  onSubmit = event => {
    console.log(event);
    const { task, id } = this.state;
    const { onFormSubmit } = this.props;
    event.preventDefault();
    onFormSubmit(task, id);
  };
  render() {
    return (
      <form id="todoForm" onSubmit={this.onSubmit}>
        <input
          onChange={this.onChange}
          type="text"
          name="task"
          placeholder="Enter task"
          value={this.state.task}
        />
        <button type="submit">Add Task</button>
        <button
          onClick={() => this.props.onClearClicked()}
          type="button"
          id="clear"
        >
          Clear Completed
        </button>
      </form>
    );
  }
}

export default TodoForm;
