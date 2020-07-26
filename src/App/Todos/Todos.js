import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../../store/actionCreators/todo";

import Todo from "../Todo/Todo";

export default function Todos() {
  const dispatch = useDispatch();
  const { selected } = useSelector((state) => state.todoList);
  const { todos } = useSelector((state) => state.todo);

  useEffect(() => {
    dispatch(fetchTodos(selected._id));
  }, []);

  const todoItems = todos.map((todo) => <Todo key={todo._id} {...todo} />);

  return <ul className='menu-list'>{todoItems}</ul>;
}
