import React from "react";
import { useDispatch } from "react-redux";
import { buttonPositioner, btn } from "./AddTodoButton.module.scss";

import { showTodoForm } from "../../store/actionCreators/todoForm";

export default function AddTodoListButton() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(showTodoForm());
  }
  return (
    <div className={buttonPositioner}>
      <button
        className={`button is-white is-fullwidth ${btn}`}
        onClick={handleClick}
      >
        <span className='icon'>
          <i className='fas fa-plus-circle'></i>
        </span>
        <span>Add Todo</span>
      </button>
    </div>
  );
}
