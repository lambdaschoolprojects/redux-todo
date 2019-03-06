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
  render() {
    return (
      <div>
        <TodoList todoList={this.state.todoList} />
        <TodoForm />
      </div>
    );
  }
}

export default App;
