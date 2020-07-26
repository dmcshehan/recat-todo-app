import React from "react";
import { todoListItem } from "./TodoListItem.module.scss";

import { useDispatch } from "react-redux";
import { selectTodoList } from "../../store/actionCreators/todoList";

export default function TodoListItem({ title, _id }) {
  const dispatch = useDispatch();

  function handleTodoClick() {
    dispatch(selectTodoList(_id));
  }

  return (
    <li className={todoListItem} onClick={handleTodoClick}>
      {title}
    </li>
  );
}
