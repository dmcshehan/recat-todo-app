import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../../store/actionCreators/todo";

export default function Todos() {
  const { selected } = useSelector((state) => state.todoList);
  const { todos } = useSelector((state) => state.todo);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos(selected._id));
  }, [selected, todos]);

  return <div>Todos</div>;
}
