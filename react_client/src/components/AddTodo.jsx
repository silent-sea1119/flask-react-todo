import React, { Component } from "react";
import Button from "./Button";

export default class AddTodo extends Component {
  state = {
    value: ""
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleButtonClick = () => {
    const text = this.state.value.trim();
    if (text.length <= 0) {
      return;
    }
    this.props.handleAddTodo(text);
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
        <Button onClick={this.handleButtonClick}>Add task</Button>
      </div>
    );
  }
}
