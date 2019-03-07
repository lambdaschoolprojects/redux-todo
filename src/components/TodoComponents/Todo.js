import React from "react";

import "../../styles/Todo.css";

const Todo = ({ placeholderTask, task, completed, id, onTaskClicked }) => {
  let completedClass = completed ? "completed" : null;
  return (
    <div
      onClick={() => onTaskClicked(id)}
      className={`todoItem ${completedClass}`}
      id={id}
      style={placeholderTask == "true" ? { backgroundColor: "#FCECC9" } : null}
    >
      <p>{task}</p>
    </div>
  );
};

export default Todo;
