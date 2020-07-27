import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../../store/actionCreators/todo";
import { selectTodoList } from "../../store/actionCreators/todoList";

import { wrap } from "./Todos.module.scss";

import Todo from "../Todo/Todo";
import AddTodoButton from "../AddTodoButton/AddTodoButton";

export default function Todos() {
  const dispatch = useDispatch();
  const { selected, todoLists } = useSelector((state) => state.todoList);
  const { todos } = useSelector((state) => state.todo);

  useEffect(() => {
    let unsubscribe;
    if (selected) {
      unsubscribe = dispatch(fetchTodos(selected._id));
    } else {
      const dailyTodosList = todoLists.find(
        (list) => list.title === "Daily Todos"
      );

      if (dailyTodosList) {
        unsubscribe = dispatch(fetchTodos(dailyTodosList._id));
        dispatch(selectTodoList(dailyTodosList._id));
      }
    }

    return function () {
      unsubscribe();
    };
  }, []);

  const todoItems = todos.map((todo) => <Todo key={todo._id} {...todo} />);

  return (
    <div>
      {todoItems}
      <AddTodoButton />
    </div>
  );
}
