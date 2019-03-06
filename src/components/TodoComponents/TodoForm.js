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
    const { task, id } = event.target;
    this.setState({ task, id });
  };
  render() {
    return (
      <form>
        <input
          onChange={this.onChange}
          type="text"
          name="task"
          value={this.state.task}
        />
        <input
          onChange={this.onChange}
          type="text"
          name="id"
          value={this.state.id}
        />
        <button type="submit">Add Task</button>
      </form>
    );
  }
}

export default TodoForm;
