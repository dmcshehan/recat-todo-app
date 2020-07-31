import React from "react";
import { useSelector } from "react-redux";

import TodoListItem from "../TodoListItem/TodoListItem";

export default function TodoListItems() {
  const { todoLists } = useSelector((state) => state.todoList);

  const todoListItems = todoLists.map((todoList) => (
    <TodoListItem key={todoList._id} {...todoList} />
  ));

  return <ul className='menu-list'>{todoListItems}</ul>;
}
