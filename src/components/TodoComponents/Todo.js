import React from "react";

const Todo = ({ task, completed, id, onTaskClicked }) => {
  return (
    <div id={id}>
      <p
        style={completed ? { textDecoration: "line-through" } : null}
        onClick={() => onTaskClicked(id)}
      >
        {task}
      </p>
    </div>
  );
};

export default Todo;
