import React, { Component } from "react";

import "../../styles/Todo.css";

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
    const { task, id } = this.state;
    const { onFormSubmit } = this.props;
    event.preventDefault();
    onFormSubmit(task, id);
    this.setState({ task: "" });
  };
  render() {
    return (
      <form className="todoForm" onSubmit={this.onSubmit}>
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
