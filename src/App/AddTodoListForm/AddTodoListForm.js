import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { inputField, hide } from "./AddTodoListForm.module.scss";

export default function AddTodoListForm() {
  const { showTodoListForm } = useSelector((state) => state.todoListForm);

  const input = React.createRef();

  useEffect(() => {
    input.current.focus();
  });

  return (
    <div className={!showTodoListForm ? hide : null}>
      <input type='text' ref={input} className={inputField} />
    </div>
  );
}
