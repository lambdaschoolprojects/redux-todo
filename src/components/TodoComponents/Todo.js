import React from "react";

import "../../styles/Todo.css";

const Todo = ({ task, completed, id, onTaskClicked }) => {
  let completedClass = completed ? "completed" : null;
  return (
    <div
      onClick={() => onTaskClicked(id)}
      className={`todoItem ${completedClass}`}
      id={id}
    >
      <p>{task}</p>
    </div>
  );
};

export default Todo;
