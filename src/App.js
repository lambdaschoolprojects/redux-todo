import React, { Component } from "react";

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.newId = 1;
    this.state = {
      todoList: []
    };
  }
  onFormSubmit = newTask => {
    const newState = [
      ...this.state.todoList,
      { task: newTask, id: this.newId, completed: false }
    ];
    this.setState({ todoList: newState });
    this.newId++;
  };
  onTaskClicked = taskId => {
    let taskIndex;
    let newState = this.state.todoList;

    //console.log(newState[count]);

    for (let i = 0; i < newState.length; i++) {
      if (newState[i].id === taskId) taskIndex = i;
    }

    //console.log(count);

    newState[taskIndex]["completed"] = true;

    this.setState({ todoList: newState });
  };
  onClearClicked = _ => {
    const newState = this.state.todoList;

    console.log("test");

    for (let i = 0; i < newState.length; i++) {
      if (newState[i].completed === true) newState.splice(i, 1);
    }

    this.setState({ todoList: newState });
  };
  render() {
    return (
      <div>
        <TodoList
          onTaskClicked={this.onTaskClicked}
          todoList={this.state.todoList}
        />
        <TodoForm
          onFormSubmit={this.onFormSubmit}
          onClearClicked={this.onClearClicked}
        />
      </div>
    );
  }
}

export default App;
