import React from "react";
import { Todo } from "./Todo";

const TodoList = (props) => {
  return (
    <div>
      {props.todo.map((task) => {
        return <Todo key={task.id} task={task} />;
      })}
    </div>
  );
};

export default TodoList;
