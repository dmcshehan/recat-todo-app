import React, { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { fetchTodoLists } from "../../store/actionCreators/todoList";

import TodoListItem from "../TodoListItem/TodoListItem";

export default function TodoList() {
  const { todoLists } = useSelector((state) => state.todoList);
  const dispatch = useDispatch();

  const todoListTitles = todoLists.map((todoListItem) => todoListItem.title);

  useEffect(() => {
    dispatch(fetchTodoLists());
  }, todoListTitles);

  const todoListItems = todoLists.map((todoList) => (
    <TodoListItem key={todoList._id} {...todoList} />
  ));

  return (
    <div className={`column is-3`}>
      <aside className='menu'>
        <ul className='menu-list'>{todoListItems}</ul>
      </aside>
    </div>
  );
}
