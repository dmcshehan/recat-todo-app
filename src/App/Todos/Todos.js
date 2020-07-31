import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../../store/actionCreators/todo";
import { selectTodoList } from "../../store/actionCreators/todoList";
import { fetchDailyTodosBydate } from "../../store/actionCreators/dailyTodo";

import getDailyTodoInstance from "../../helpers/getDailyTodoInstance";

import Todo from "../Todo/Todo";
import AddTodoButton from "../AddTodoButton/AddTodoButton";

export default function Todos() {
  const dispatch = useDispatch();
  const { selected, todoLists } = useSelector((state) => state.todoList);
  const { todos } = useSelector((state) => state.todo);

  useEffect(() => {
    let unsubscribe;

    if (selected) {
      unsubscribe = dispatch(fetchTodos(selected));
    } else {
      const dailyTodosList = getDailyTodoInstance(todoLists);

      if (dailyTodosList) {
        dispatch(selectTodoList(dailyTodosList._id));
        unsubscribe = dispatch(fetchDailyTodosBydate());
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
