import React, { Component } from "react";

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: []
    };
  }
  onFormSubmit = (newTask, newId) => {
    const newState = [
      ...this.state.todoList,
      { task: newTask, id: newId, completed: false }
    ];
    this.setState({ todoList: newState });
  };
  render() {
    return (
      <div>
        <TodoList todoList={this.state.todoList} />
        <TodoForm onFormSubmit={this.onFormSubmit} />
      </div>
    );
  }
}

export default App;
