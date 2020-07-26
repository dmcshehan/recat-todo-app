import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "../../store/actionCreators/todo";

export default function AddTodoForm() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  function handleChange(e) {
    setTodo(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addTodo(todo)).then(function () {
      setTodo("");
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={todo}
          onChange={handleChange}
          placeholder='Todo Title'
        />
        <button>Add Todo</button>
      </form>
    </div>
  );
}
