import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../../store/actionCreators/todo";

import Todo from "../Todo/Todo";
import CompletedTodos from "../CompletedTodos/CompletedTodos";
import IncompleteTodos from "../IncompleteTodos/IncompleteTodos";

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
      unsubscribe = dispatch(fetchTodos(dailyTodosList._id));
    }

    return function () {
      unsubscribe();
    };
  }, []);

  const todoItems = todos.map((todo) => <Todo key={todo._id} {...todo} />);

  return (
    <div className='columns'>
      <IncompleteTodos todos={todos} />
      <CompletedTodos todos={todos} />
    </div>
  );
}
