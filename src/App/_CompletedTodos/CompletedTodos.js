import React from "react";
import { useDispatch } from "react-redux";

import Todo from "../Todo/Todo";

export default function CompletedTodos({ todos }) {
  const dispatch = useDispatch();

  const completedTodos = todos.filter((todo) => todo.isComplete);
  const completeTodoItems = completedTodos.map((todo) => (
    <Todo key={todo._id} {...todo} />
  ));

  return (
    <div className='column is-half'>
      <ul className='menu-list'>{completeTodoItems}</ul>
    </div>
  );
}
