import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import TodoListItems from "../TodoListItems/TodoListItems";
import AddTodoListButton from "../AddTodoListButton/AddTodoListButton";
import AddTodoListForm from "../AddTodoListForm/AddTodoListForm";

import { fetchTodoLists } from "../../store/actionCreators/todoList";

import { list, open, close } from "./TodoLists.module.scss";

export default function TodoList() {
  const dispatch = useDispatch();
  const { screenSize, isMobileTodoListOpen } = useSelector((state) => state.ui);

  useEffect(() => {
    const unsubscribe = dispatch(fetchTodoLists());

    return function () {
      unsubscribe();
    };
  }, []);

  return (
    <div
      className={`column is-one-fifth-desktop ${list} ${
        screenSize === "mobile" || screenSize === "tablet"
          ? isMobileTodoListOpen
            ? open
            : close
          : open
      }`}
    >
      <div>
        <TodoListItems />
        <AddTodoListForm />
        <AddTodoListButton />
      </div>
    </div>
  );
}
