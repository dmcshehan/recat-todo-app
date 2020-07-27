import React from "react";
import { todoListItem, button } from "./TodoListItem.module.scss";

import { useDispatch } from "react-redux";
import { selectTodoList } from "../../store/actionCreators/todoList";

export default function TodoListItem({ title, _id }) {
  const dispatch = useDispatch();

  function handleTodoClick() {
    dispatch(selectTodoList(_id));
  }

  function handleDelete() {
    dispatch(selectTodoList(_id));
  }

  return (
    <li className={todoListItem} onClick={handleTodoClick}>
      <p> {title}</p>
      <p className='buttons'>
        <button className={`button is-text ${button}`} onClick={handleDelete}>
          <span className='icon'>
            <i className='far fa-trash-alt'></i>
          </span>
        </button>
      </p>
    </li>
  );
}
