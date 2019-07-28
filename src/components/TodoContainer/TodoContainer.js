import React from "react";

//custom components
import TodoForm from "../TodoForm/TodoForm";

//styles
import styles from "./todoContainer.module.css";

const TodoContainer = ({ children, add }) => {
  return (
    <ul className={styles.container}>
      <TodoForm submit={add} />
      {children}
    </ul>
  );
};

export default TodoContainer;
