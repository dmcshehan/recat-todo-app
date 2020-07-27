import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { updateTodo, deleteTodo } from "../../store/actionCreators/todo";

import { todo, checkbox, wrap, button } from "./Todo.module.scss";
export default function Todo({ title, _id, isComplete }) {
  const dispatch = useDispatch();

  function handleCheckbox() {
    dispatch(
      updateTodo(_id, {
        isComplete: !isComplete,
      })
    );
  }

  function handleDelete() {
    if (
      window.confirm(
        `Are you sure you want to delete "${title}" from the list?`
      )
    ) {
      dispatch(deleteTodo(_id));
    }
  }

  return (
    <li className={todo}>
      <div className={wrap}>
        <input
          className={`${checkbox}`}
          type='checkbox'
          name='isComplete'
          id='isComplete'
          onChange={handleCheckbox}
          checked={isComplete}
        />
        {!isComplete ? (
          <p>{title}</p>
        ) : (
          <strike>
            <p>{title}</p>
          </strike>
        )}
      </div>

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

Todo.propTypes = {
  title: PropTypes.string,
};
