import React from "react";
import { useSelector } from "react-redux";

import { wrap, close, open } from "./TodoListDetails.module.scss";
import TodoListDetailsHeader from "../TodoListDetailsHeader/TodoListDetailsHeader";
import AddTodoForm from "../AddTodoForm/AddTodoForm";
import Todos from "../Todos/Todos";

export default function TodoListDetails() {
  const { selected } = useSelector((state) => state.todoList);
  const { screenSize, isMobileTodoListOpen } = useSelector((state) => state.ui);

  return (
    <div
      className={`column is-four-fifth-desktop ${wrap} ${
        isMobileTodoListOpen ? close : open
      }`}
    >
      <TodoListDetailsHeader {...selected} />
      <AddTodoForm />
      <Todos />
    </div>
  );
}
