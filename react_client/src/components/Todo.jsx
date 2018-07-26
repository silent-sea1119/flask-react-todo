import React, { Component } from "react";

export default class Todo extends Component {
  render() {
    const { onChange, todo } = this.props;

    return (
      <li>
        <input
          type="checkbox"
          name="done"
          onChange={() => onChange(todo)}
          defaultChecked={todo.done}
        />
        <span>{todo.value}</span>
      </li>
    );
  }
}
