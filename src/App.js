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

  handleAdd = (taskName) => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      ...this.state,
      todo: [...this.state.todo, newTask],
    });
  };

  handleClear = () => {
    //set state
    this.setState({
      ...this.state,
      todo: this.state.todo.filter((task) => {
        return task.completed === false;
      }),
    });
    //spread state
    //get rid of completed tasks
  };

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
