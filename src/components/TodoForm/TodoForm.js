import React, { useState } from "react";
import { Form, Input, Button } from "antd";
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
    <Form layout="inline" onSubmit={handleSubmit} className={styles.form}>
      <Form.Item>
        <Input
          onFocus={() => setState({ ...state, focused: true })}
          placeholder="Add Todos ..."
          value={state.value}
          onChange={onChange}
          className={styles.input}
        />
      </Form.Item>

      <Button
        icon="plus-circle"
        type="success"
        htmlType="submit"
        disabled={!state.validated}
      >
        Add
      </Button>
    </Form>
  );
};

export default TodoForm;
