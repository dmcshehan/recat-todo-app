import React from "react";
import { todoListItem, button } from "./TodoListItem.module.scss";

import { useDispatch } from "react-redux";
import {
  selectTodoList,
  deleteTodoList,
} from "../../store/actionCreators/todoList";

export default function TodoListItem({ title, _id }) {
  const dispatch = useDispatch();

  function handleTodoClick() {
    dispatch(selectTodoList(_id));
  }

  function handleDelete() {
    dispatch(selectTodoList(_id));
  }

  function handleDelete(e) {
    e.stopPropagation();
    if (
      window.confirm(
        `Are you sure you want to delete "${title}" from your list?. All todos associated with this list will also be deleted`
      )
    ) {
      dispatch(deleteTodoList(_id));
    }
  }

  return (
    <li className={todoListItem} onClick={handleTodoClick}>
      <p> {title}</p>
      {!(title === `Daily Todos`) ? (
        <p className='buttons'>
          <button className={`button is-text ${button}`} onClick={handleDelete}>
            <span className='icon'>
              <i className='far fa-trash-alt'></i>
            </span>
          </button>
        </p>
      ) : null}
    </li>
  );
}
