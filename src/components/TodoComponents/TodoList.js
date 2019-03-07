// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from "react";

import Todo from "./Todo";
import "../../styles/Todo.css";

class TodoList extends Component {
  getTodos = todoList => {
    console.log(todoList);
    let todos;
    const placeholderTodoList = [
      { task: "No tasks yet", completed: false, id: "0001" }
    ];
    if (todoList.length == 0)
      todos = (
        <Todo
          id={placeholderTodoList[0].id}
          task={placeholderTodoList[0].task}
          completed={placeholderTodoList[0].completed}
          onTaskClicked={() => {}}
        />
      );
    else
      todos = todoList.map(todo => (
        <Todo
          id={todo.id}
          key={todo.id}
          task={todo.task}
          onTaskClicked={this.props.onTaskClicked}
          completed={todo.completed}
        />
      ));

    return todos;
  };

  render() {
    //console.log(this.props.todoList);
    return (
      <div onTaskCLicked={this.props.onTaskClicked} className={"todoList"}>
        {this.getTodos(this.props.todoList)}
      </div>
    );
  }
}

export default TodoList;
