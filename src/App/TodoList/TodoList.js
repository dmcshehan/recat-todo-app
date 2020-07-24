import React from "react";
import TodoListItems from "../TodoListItems/TodoListItems";

import { list } from "./TodoLists.module.scss";

export default function TodoList() {
  return (
    <div className={`column is-2 ${list}`}>
      <div>
        <TodoListItems />
      </div>
    </div>
  );
}
