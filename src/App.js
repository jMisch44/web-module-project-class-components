import React, { useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./components/Todo.css";
import SearchBar from "./components/SearchBar";

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
    this.setState({
      ...this.state,
      todo: this.state.todo.filter((task) => {
        return task.completed === false;
      }),
    });
  };

  handleSearch = (searchString) => {
    this.setState({
      ...this.state,
      todo: this.state.todo.filter((task) => {
        return task.task.toLowerCase().includes(searchString.toLowerCase());
      }),
    });
  };

  render() {
    return (
      <div className="App">
        <header className="header">
          <h2>Todo List!</h2>
          <SearchBar handleSearch={this.handleSearch} />
        </header>
        <TodoList handleToggle={this.handleToggle} todo={this.state.todo} />
        <TodoForm handleAdd={this.handleAdd} handleClear={this.handleClear} />
      </div>
    );
  }
}

export default App;
