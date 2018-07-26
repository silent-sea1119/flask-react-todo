import React, { Component } from "react";
import Todo from "./Todo";

export default class Todos extends Component {
  state = {
    todos: [
      { id: 1, task: "This is a task", done: true },
      { id: 2, task: "This is another task", done: false },
      { id: 3, task: "This is yet another task", done: false }
    ]
  };

  handleDone = todo => {
    const todos = [...this.state.todos];
    const index = todos.indexOf(todo);
    todos[index] = { ...todo };
    todos[index].done = !todos[index].done;
    this.setState({ todos });
  };

  render() {
    console.log(...this.state.todos);
    return (
      <ul>
        {this.state.todos.map(todo => (
          <Todo key={todo.id} todo={todo} onChange={this.handleDone} />
        ))}
      </ul>
    );
  }
}
