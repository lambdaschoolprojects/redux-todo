import React, { Component } from "react";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      id: ""
    };
  }
  onChange = event => {
    const { name } = event.target;
    this.setState({ [name]: event.target.value });
  };
  onSubmit = event => {
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
        <input
          onChange={this.onChange}
          type="text"
          name="id"
          placeholder="Enter ID"
          value={this.state.id}
        />
        <button type="submit">Add Task</button>
      </form>
    );
  }
}

export default TodoForm;
