import React from "react";
import Button from "./Button";

const Todo = ({ todo, handleDone, handleRemoveTodo }) => {
  return (
    <div>
      <input
        type="checkbox"
        name="done"
        onChange={() => handleDone(todo)}
        defaultChecked={todo.done}
        // Add submit on Enter keydown
      />
      <span>{todo.value}</span>
      <Button onClick={() => handleRemoveTodo(todo)}>Delete</Button>
    </div>
  );
};

export default Todo;
