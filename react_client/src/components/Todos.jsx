import React from "react";
import Todo from "./Todo";

const Todos = ({ todos, handleDone }) => {
  return (
    <ul>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          handleDone={handleDone}
        />
      ))}
    </ul>
  );
};

export default Todos;
