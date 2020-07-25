import React, { useEffect } from "react";

import { inputField } from "./AddTodoListForm.module.scss";

export default function AddTodoListForm() {
  const input = React.createRef();

  useEffect(() => {
    input.current.focus();
  });

  return (
    <div>
      <input type='text' ref={input} className={inputField} />
    </div>
  );
}
