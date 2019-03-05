import React, { Fragment } from "react";

const Todo = ({ task, completed, id }) => {
  return (
    <div id={id}>
      <p>{task}</p>
      <p>{completed ? "Done" : "Not done"}</p>
    </div>
  );
};
