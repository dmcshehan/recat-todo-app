import React from "react";
import { buttonPositioner, btn } from "./AddTodoListButton.module.scss";

export default function AddTodoListButton() {
  return (
    <div className={buttonPositioner}>
      <button className={`button is-white is-fullwidth ${btn}`}>
        <span className='icon'>
          <i className='fas fa-plus-circle'></i>
        </span>
        <span>Add Todo List</span>
      </button>
    </div>
  );
}
