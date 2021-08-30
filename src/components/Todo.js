import React from "react";

export const Todo = (props) => {
  const { task } = props;
  return (
    <div>
      <h3>{task.task}</h3>
    </div>
  );
};
