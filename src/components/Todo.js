import React from "react";

export const Todo = (props) => {
  const { task } = props;

  const handleClick = () => {
    props.handleToggle(task.id);
  };

  return (
    <div
      onClick={handleClick}
      className={`task${task.completed ? " completed" : ""} `}
    >
      <h3>{task.task}</h3>
    </div>
  );
};
