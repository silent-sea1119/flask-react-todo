import React from "react";
import Button from "./Button";

const Todo = ({ todo, handleDone, handleRemoveTodo }) => {
  return (
    <li>
      <input
        type="checkbox"
        name="done"
        onChange={() => handleDone(todo)}
        defaultChecked={todo.done}
      />
      <span>{todo.value}</span>
      <Button onClick={() => handleRemoveTodo(todo)}>Delete</Button>
    </li>
  );
};

export default Todo;
