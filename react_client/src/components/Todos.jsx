import React, { Component } from "react";
import Todo from "./Todo";

export default class Todos extends Component {
  state = {
    showing_done: false,
    todos: [
      { id: 1, task: "This is a task", done: true },
      { id: 2, task: "This is another task", done: false },
      { id: 3, task: "This is yet another task", done: false }
    ]
  };

  render() {
    return <ul>{this.state.todos.map(todo => <Todo key={todo.id} />)}</ul>;
  }
}
