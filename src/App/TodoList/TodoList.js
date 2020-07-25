import React from "react";
import { useSelector } from "react-redux";

import TodoListItems from "../TodoListItems/TodoListItems";
import AddTodoListButton from "../AddTodoListButton/AddTodoListButton";
import AddTodoListForm from "../AddTodoListForm/AddTodoListForm";

import { list } from "./TodoLists.module.scss";

export default function TodoList() {
  return (
    <div className={`column is-2 ${list}`}>
      <div>
        <TodoListItems />
        <AddTodoListForm />
        <AddTodoListButton />
      </div>
    </div>
  );
}
