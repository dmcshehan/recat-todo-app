import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Todo from "../Todo/Todo";

export default function CompletedTodos({ todos }) {
  const dispatch = useDispatch();

  const incompleteTodos = todos.filter((todo) => !todo.isComplete);
  const incompleteTodoItems = incompleteTodos.map((todo) => (
    <Todo key={todo._id} {...todo} />
  ));

  return (
    <div className='column is-half'>
      <ul className='menu-list'>{incompleteTodoItems}</ul>
    </div>
  );
}
