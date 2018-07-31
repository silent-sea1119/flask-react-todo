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

  handleEnterKeyDown = event => {
    if (event.keyCode === 13) {
      return this.handleButtonClick();
    }
  };

  render() {
    return (
      <div className="input-group m-2">
        <input
          type="text"
          className="form-control"
          placeholder="Add new task"
          value={this.state.value}
          onChange={this.handleChange}
          onKeyDown={this.handleEnterKeyDown}
        />
        <div className="input-group-append mr-3">
          <Button
            className={
              "btn btn-" + (this.state.value ? "primary" : "outline-secondary")
            }
            onClick={this.handleButtonClick}
            disabled={!this.state.value}
          >
            Add task
          </Button>
        </div>
      </div>
    );
  }
}
