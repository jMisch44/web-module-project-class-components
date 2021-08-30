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
    this.props.handleAdd(this.state.input);
    this.setState({
        input: ''
    })
  };

  handleClickClear = (e) => {
    e.preventDefault();
    this.props.handleClear();
  };

  render() {
    return (
      <div>
        <input type="text" name="task" value={this.state.input} onChange={this.handleChanges} />
        <button onClick={this.handleClickAdd}>Add Todo</button>
        <button onClick={this.handleClickClear}>Clear Completed</button>
      </div>
    );
  }
}

export default TodoForm;
