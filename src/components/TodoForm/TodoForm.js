import React, { useState } from "react";
import Button from "../Button/Button";

//styles
import styles from "./todoForm.module.css";

const TodoForm = ({ submit }) => {
  const [state, setState] = useState({
    value: "",
    validated: false
  });

  const handleSubmit = e => {
    e.preventDefault();
    if (state.value !== "") {
      submit(state.value);
      setState({ ...state, value: "", validated: false });
    }
  };

  const onChange = e => {
    setState({
      ...state,
      value: e.target.value,
      validated: e.target.value.length > 5 ? true : false
    });
  };

  return (
    <li>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          onFocus={() => setState({ ...state, focused: true })}
          placeholder="Add Todos ..."
          value={state.value}
          onChange={onChange}
          className={styles.input}
        />
        <Button type="submit" disabled={!state.validated}>
          Add Todo
        </Button>
      </form>
    </li>
  );
};

export default TodoForm;
