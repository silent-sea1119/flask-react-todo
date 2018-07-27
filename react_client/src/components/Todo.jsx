import React from "react";
import Button from "./Button";

const Todo = ({ todo, handleDone }) => {
  return (
    <li>
      <input
        type="checkbox"
        name="done"
        onChange={() => handleDone(todo)}
        defaultChecked={todo.done}
      />
      <span>{todo.value}</span>
    </li>
  );
};

export default Todo;
