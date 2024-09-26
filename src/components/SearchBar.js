import React from "react";

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  handleSearchInput = (e) => {
    e.preventDefault();
    this.props.handleSearch(this.state.input);
  };

  render() {
    return (
      <div className="searchBar">
        <input type="text" placeholder="Search" onChange={this.handleChange} />
        <button onClick={this.handleSearchInput}>Search</button>
      </div>
    );
  }
}

export default SearchBar;
