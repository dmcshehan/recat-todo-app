import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodoLists } from "../../store/actionCreators/todoList";

export default function TodoList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodoLists());
  });
  return <div className={`column is-3`}>LIST</div>;
}
