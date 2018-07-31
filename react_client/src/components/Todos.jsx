import React from "react";
import Todo from "./Todo";
import AddTodo from "./AddTodo";

const Todos = ({ todos, handleDone, handleRemoveTodo, handleAddTodo }) => {
  return (
    <ul className="list-group list-group-flush">
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          handleDone={handleDone}
          handleRemoveTodo={handleRemoveTodo}
        />
      ))}
      <AddTodo handleAddTodo={handleAddTodo} />
    </ul>
  );
};

export default Todos;
