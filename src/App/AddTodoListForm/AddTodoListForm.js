import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { inputField, hide, form } from "./AddTodoListForm.module.scss";

import { addTodoList } from "../../store/actionCreators/todoList";
import { hideTodoListForm } from "../../store/actionCreators/todoListForm";

export default function AddTodoListForm() {
  const [todoList, setTodoList] = useState("");
  const dispatch = useDispatch();
  const { showTodoListForm } = useSelector((state) => state.todoListForm);

  const input = React.createRef();

  useEffect(() => {
    input.current.focus();
  });

  function onTodoChange(e) {
    setTodoList(e.target.value);
  }

  function onFormSubmit(e) {
    e.preventDefault();
    dispatch(addTodoList(todoList));
  }

  return (
    <div className={!showTodoListForm ? hide : null}>
      <form className={form} onSubmit={onFormSubmit}>
        <input
          type='text'
          ref={input}
          className={`${inputField} is-small`}
          value={todoList}
          onChange={onTodoChange}
        />
        <button
          className='button is-small is-outlined'
          disabled={todoList.length === 0}
        >
          Add
        </button>
      </form>
    </div>
  );
}
