import React from "react";
import { todoListItem } from "./TodoListItem.module.scss";

export default function TodoListItem({ title, _id }) {
  function handleTodoClick() {
    console.log(_id);
  }
  return (
    <li className={todoListItem} onClick={handleTodoClick}>
      {title}
    </li>
  );
}
