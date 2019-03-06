import React, { Fragment } from "react";

const Todo = ({ task, completed, id }) => {
  return (
    <div id={id}>
      <p>{task}</p>
      <input type="checkbox" />
      Completed?
    </div>
  );
};

export default Todo;
