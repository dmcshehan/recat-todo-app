import React, { useState } from "react";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTimes,
  faPencilAlt
} from "@fortawesome/free-solid-svg-icons";

//styles
import styles from "./todo.module.css";

const Todo = ({ todo, onComplete, onDelete, onUpdate }) => {
  const { name, isComplete } = todo;

  const [state, setState] = useState({
    currentlyEditing: false,
    inputValue: ""
  });

  const onEdit = () => {
    setState({ ...state, currentlyEditing: true, inputValue: name });
  };

  const onChange = e => {
    setState({
      ...state,
      inputValue: e.target.value
    });
  };

  const onLocalUpdate = () => {
    setState({
      ...state,
      currentlyEditing: false
    });
    onUpdate(state.inputValue);
  };

  return (
    <li className={styles.todo}>
      {state.currentlyEditing ? (
        <input
          className={styles.input}
          type="text"
          value={state.inputValue}
          onChange={onChange}
        />
      ) : (
        <p className={`${styles.text} ${isComplete ? styles.cut : ""}`}>
          {name}
        </p>
      )}

      <div className="buttons">
        {state.currentlyEditing ? (
          <Button
            onClick={state.currentlyEditing ? onLocalUpdate : onComplete}
            disabled={state.inputValue.length <= 5}
          >
            <FontAwesomeIcon icon={faCheck} />
          </Button>
        ) : !isComplete ? (
          <>
            <Button onClick={onComplete}>
              <FontAwesomeIcon icon={faCheck} />
            </Button>
            <Button onClick={onEdit} style={{ background: "#2196F3" }}>
              <FontAwesomeIcon icon={faPencilAlt} />
            </Button>
            <Button onClick={onDelete} style={{ background: "#f36464" }}>
              <FontAwesomeIcon icon={faTimes} />
            </Button>
          </>
        ) : (
          <Button onClick={onDelete} style={{ background: "#f36464" }}>
            <FontAwesomeIcon icon={faTimes} />
          </Button>
        )}
      </div>
    </li>
  );
};

export default Todo;
