import React from "react";
import { useDispatch } from "react-redux";
import { buttonPositioner, btn } from "./AddTodoListButton.module.scss";

import { showTodoListForm } from "../../store/actionCreators/todoListForm";

export default function AddTodoListButton() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(showTodoListForm());
  }
  return (
    <div className={buttonPositioner}>
      <button className={`button is-fullwidth ${btn}`} onClick={handleClick}>
        <span className='icon'>
          <i className='fas fa-plus-circle'></i>
        </span>
        <span>Add Todo List</span>
      </button>
    </div>
  );
}
