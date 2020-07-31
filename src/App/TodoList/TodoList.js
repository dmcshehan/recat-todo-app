import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import TodoListItems from "../TodoListItems/TodoListItems";
import AddTodoListButton from "../AddTodoListButton/AddTodoListButton";
import AddTodoListForm from "../AddTodoListForm/AddTodoListForm";

import { fetchTodoLists } from "../../store/actionCreators/todoList";

import { list } from "./TodoLists.module.scss";

export default function TodoList() {
  const dispatch = useDispatch();
  const { screenSize, isMobileTodoListOpen } = useSelector((state) => state.ui);

  useEffect(() => {
    const unsubscribe = dispatch(fetchTodoLists());

    return function () {
      unsubscribe();
    };
  }, []);

  const comp = (
    <div className={`column is-one-fifth-desktop ${list}`}>
      <div>
        <TodoListItems />
        <AddTodoListForm />
        <AddTodoListButton />
      </div>
    </div>
  );

  return screenSize === "mobile" || screenSize === "tablet"
    ? isMobileTodoListOpen
      ? comp
      : null
    : comp;
}
