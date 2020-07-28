import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import TodoListItems from "../TodoListItems/TodoListItems";
import AddTodoListButton from "../AddTodoListButton/AddTodoListButton";
import AddTodoListForm from "../AddTodoListForm/AddTodoListForm";

import { fetchTodoLists } from "../../store/actionCreators/todoList";

import { list } from "./TodoLists.module.scss";

export default function TodoList() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = dispatch(fetchTodoLists());

    return function () {
      unsubscribe();
    };
  }, []);

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
