import React from "react";
import { todoListItem } from "./TodoListItem.module.scss";

export default function TodoListItem({ title }) {
  return <li className={todoListItem}>{title}</li>;
}
