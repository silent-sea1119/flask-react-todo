import React from "react";
import Todo from "./Todo";

const Todos = ({ todos, handleDone, handleRemoveTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          handleDone={handleDone}
          handleRemoveTodo={handleRemoveTodo}
        />
      ))}
    </ul>
  );
};

export default Todos;
