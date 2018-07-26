import React, { Component } from "react";

export default class AddTodo extends Component {
  state = {
    value: ""
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleButtonClick = event => {
    this.props.handleAddTask(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input
          type="button"
          value="Add task"
          onClick={this.handleButtonClick}
        />
      </div>
    );
  }
}
