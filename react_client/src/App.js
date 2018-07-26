import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import Button from "./components/Button";

export default class App extends Component {
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
    return (
      <div>
        <AddTodo />
        <Button />
        <Todos todos={this.state.todos} handleDone={this.handleDone} />
      </div>
    );
  }
}
