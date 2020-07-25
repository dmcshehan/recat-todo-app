import React from "react";
import TodoListItems from "../TodoListItems/TodoListItems";
import AddTodoListButton from "../AddTodoListButton/AddTodoListButton";

import { list } from "./TodoLists.module.scss";

export default function TodoList() {
  return (
    <div className={`column is-2 ${list}`}>
      <div>
        <TodoListItems />
        <AddTodoListButton />
      </div>
    </div>
  );
}
