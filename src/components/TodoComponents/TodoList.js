// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from "react";

class TodoList extends Component {
  constructor(props) {
    const { todos } = props;
    super(props);

    this.state = {
      todos
    };
  }
  render() {
    return <div className={"todoList"}>{}</div>;
  }
}

export default TodoList;
