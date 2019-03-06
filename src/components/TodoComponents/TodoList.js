// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from "react";

import Todo from "./Todo";

class TodoList extends Component {
  getTodos = todoList => {
    const todos = todoList.map(todo => (
      <Todo
        id={todo.id}
        key={todo.id}
        task={todo.task}
        completed={todo.completed}
      />
    ));

    return todos;
  };

  render() {
    return (
      <div className={"todoList"}>{this.getTodos(this.props.todoList)}</div>
    );
  }
}

export default TodoList;
