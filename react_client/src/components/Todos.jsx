import React from "react";
import Todo from "./Todo";

const Todos = props => {
  const { todos, handleDone } = props;

  return (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} onChange={handleDone} />
      ))}
    </ul>
  );
};

export default Todos;
