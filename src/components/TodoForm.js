import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  handleChanges = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  handleClickAdd = (e) => {
    e.preventDefault();
  };

  handleClickClear = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <input type="text" name="task" onChange={this.handleChanges} />
        <button onClick={this.handleClickAdd}>Add Todo</button>
        <button onClick={this.handleClickClear}>Clear Completed</button>
      </div>
    );
  }
}

export default TodoForm;
