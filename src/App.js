import React, { useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./components/Todo.css";

const todo = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: todo,
    };
  }

  handleToggle = (id) => {
    this.setState({
      ...this.state,
      todo: this.state.todo.map((task) => {
        if (id === task.id) {
          return {
            ...task,
            completed: !task.completed,
          };
        } else {
          return task;
        }
      }),
    });
  };

  handleAdd = () => {
    return;
  };

  handleClear = () => {
    return;
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList handleToggle={this.handleToggle} todo={this.state.todo} />
        <TodoForm handleAdd={this.handleAdd} handleClear={this.handleClear} />
      </div>
    );
  }
}

export default App;
