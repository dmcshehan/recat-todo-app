import React from "react";
import { useDispatch } from "react-redux";

import Todo from "../Todo/Todo";

export default function CompletedTodos({ todos }) {
  const dispatch = useDispatch();

  const incompleteTodos = todos.filter((todo) => !todo.isComplete);
  const incompleteTodoItems = todos.map((todo) => (
    <Todo key={todo._id} {...todo} />
  ));

  return (
    <div className='column is-half'>
      <p className=''>Incomplete Todos</p>
      <ul className='menu-list'>{incompleteTodoItems}</ul>
    </div>
  );
}
