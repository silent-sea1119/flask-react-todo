import React, { Component } from "react";
import Todo from "./Todo";

export default class Todos extends Component {
  render() {
    const { todos, handleDone } = this.props;

    console.log(...todos);

    return (
      <ul>
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} onChange={handleDone} />
        ))}
      </ul>
    );
  }
}
