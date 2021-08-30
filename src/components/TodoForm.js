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

  handleClick = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <input type="text" name="task" onChange={this.handleChanges} />
        <button onClick={this.handleClick}>Add Todo</button>
        <button>Clear Completed</button>
      </div>
    );
  }
}

export default TodoForm;
