import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import ViewToggle from "./components/ViewToggle";

export default class App extends Component {
  state = {
    todos: [
      { id: 1, value: "This is a done task", done: true },
      { id: 2, value: "This is another task", done: false },
      { id: 3, value: "This is yet another task", done: false }
    ],
    showDone: false
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

  handleRemoveTodo = todo => {
    const todos = this.state.todos.filter(td => td !== todo);
    this.setState({ todos });
  };

  handleViewToggle = bool => {
    this.setState({ showDone: bool });
  };

  todosSelector = () => {
    if (this.state.showDone) {
      return this.state.todos.filter(td => td.done);
    }
    return this.state.todos.filter(td => td.done === false);
  };

  render() {
    return (
      <div>
        <ViewToggle handleViewToggle={this.handleViewToggle} />
        <Todos
          todos={this.todosSelector()}
          handleDone={this.handleDone}
          handleRemoveTodo={this.handleRemoveTodo}
        />
        <AddTodo handleAddTodo={this.handleAddTodo} />
      </div>
    );
  }
}
