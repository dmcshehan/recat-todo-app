import React, { useState } from "react";

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
          placeholder="Add Todo ..."
          value={state.value}
          onChange={onChange}
        />
        <button
          type="submit"
          className={`${styles.submit} ${
            state.validated ? "" : styles.disabled
          }`}
          disabled={!state.validated}
        >
          Add Todo
        </button>
      </form>
    </li>
  );
};

export default TodoForm;
