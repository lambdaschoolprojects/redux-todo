import React, { Component } from "react";

import "./styles/App.css";
//import "./styles/reset.css";

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
    if (newTask == "") return;
    this.setState(prevState => {
      return {
        todoList: [
          ...prevState.todoList,
          { task: newTask, id: this.newId, completed: false }
        ]
      };
    });
    this.newId++;
  };
  onTaskClicked = taskId => {
    let taskIndex;
    let newState = this.state.todoList;

    for (let i = 0; i < newState.length; i++) {
      if (newState[i].id === taskId) taskIndex = i;
    }

    newState[taskIndex]["completed"] = true;

    this.setState({ todoList: newState });
  };
  onClearClicked = _ => {
    this.setState(prevState => {
      return {
        todoList: prevState.todoList.filter(item => !item.completed)
      };
    });
  };
  render() {
    return (
      <div className="container">
        <div className="todoApp">
          <TodoList
            onTaskClicked={this.onTaskClicked}
            todoList={this.state.todoList}
          />
          <TodoForm
            onFormSubmit={this.onFormSubmit}
            onClearClicked={this.onClearClicked}
          />
        </div>
      </div>
    );
  }
}

export default App;
