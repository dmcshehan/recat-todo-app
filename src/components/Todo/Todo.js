import React from "react";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

//styles
import styles from "./todo.module.css";

const Todo = ({ todo, onComplete, onDelete }) => {
  const { name, isComplete } = todo;
  console.log(isComplete);
  return (
    <li className={styles.todo}>
      <p className={`${styles.text} ${isComplete ? styles.cut : ""}`}>{name}</p>
      <div className="buttons">
        {!isComplete ? (
          <Button onClick={onComplete}>
            <FontAwesomeIcon icon={faCheck} />
          </Button>
        ) : null}
        <Button onClick={onDelete} style={{ background: "#f36464" }}>
          <FontAwesomeIcon icon={faTimes} />
        </Button>
      </div>
    </li>
  );
};

export default Todo;
