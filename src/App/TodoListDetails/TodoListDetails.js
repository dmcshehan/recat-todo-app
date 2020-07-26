import React from "react";
import { useSelector } from "react-redux";

import { wrap } from "./TodoListDetails.module.scss";
import TodoListDetailsHeader from "../TodoListDetailsHeader/TodoListDetailsHeader";
import AddTodoForm from "../AddTodoForm/AddTodoForm";
import Todos from "../Todos/Todos";

export default function TodoListDetails() {
  const { selected } = useSelector((state) => state.todoList);
  return (
    <div className={`column is-10 ${wrap}`}>
      <TodoListDetailsHeader {...selected} />
      <AddTodoForm />
      <Todos />
    </div>
  );
}
