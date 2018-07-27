import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

export default class App extends Component {
  state = {
    todos: [
      { id: 1, value: "This is a task", done: true },
      { id: 2, value: "This is another task", done: false },
      { id: 3, value: "This is yet another task", done: false }
    ]
  };

  handleDone = todo => {
    const todos = [...this.state.todos];
    const index = todos.indexOf(todo);
    todos[index] = { ...todo };
    todos[index].done = !todos[index].done;
    this.setState({ todos });
  };

  handleAddTodo = value => {
    const todos = [...this.state.todos];
    const todo = {
      id: this.state.todos.length + 1,
      value: value,
      done: false
    };
    todos.push(todo);
    this.setState({ todos });
  };

  render() {
    return (
      <div>
        <Todos
          todos={this.state.todos}
          handleDone={this.handleDone}
        />
        <AddTodo handleAddTodo={this.handleAddTodo} />
      </div>
    );
  }
}
