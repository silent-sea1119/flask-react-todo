import React from "react";

const Todo = props => {
  const { onChange, todo } = props;

  return (
    <li>
      <input
        type="checkbox"
        name="done"
        onChange={() => onChange(todo)}
        defaultChecked={todo.done}
      />
      <span>{todo.value}</span>
    </li>
  );
};

export default Todo;
