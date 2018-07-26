import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import Button from "./components/Button";

class App extends Component {
  render() {
    return (
      <div>
        <Todos />
        <AddTodo />
        <Button />
      </div>
    );
  }
}

export default App;
