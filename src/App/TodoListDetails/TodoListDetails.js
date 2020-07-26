import React from "react";

import { details, info } from "./TodoListDetails.module.scss";
import TodoListDetailsHeader from "../TodoListDetailsHeader/TodoListDetailsHeader";
import AddTodoForm from "../AddTodoForm/AddTodoForm";

export default function TodoListDetails() {
  return (
    <div className={`column ${details}`}>
      <div className={`${info}`}>
        <TodoListDetailsHeader />
        <AddTodoForm />
      </div>
    </div>
  );
}
