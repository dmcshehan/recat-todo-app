import React, { useState } from "react";
import { Button, List, Input } from "antd";

//styles
import styles from "./todo.module.css";

const Todo = ({ todo, onComplete, onDelete, onUpdate, onUndo }) => {
  const { name, isComplete } = todo;

  const [state, setState] = useState({
    currentlyEditing: false,
    inputValue: ""
  });

  const onEdit = () => {
    setState({ ...state, currentlyEditing: true, inputValue: name });
  };

  const handleChange = e => {
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
    <List.Item>
      <List.Item.Meta
        title={
          state.currentlyEditing ? (
            <Input
              className={styles.input}
              type="text"
              value={state.inputValue}
              onChange={handleChange}
            />
          ) : (
            <p className={`${styles.text} ${isComplete ? styles.cut : ""}`}>
              {name}
            </p>
          )
        }
      />

      <Button.Group>
        {state.currentlyEditing ? (
          <Button
            className={styles.editConfirm}
            icon="check"
            onClick={state.currentlyEditing ? onLocalUpdate : onComplete}
            disabled={state.inputValue.length <= 5}
          />
        ) : !isComplete ? (
          <>
            <Button onClick={onComplete} icon="check" />
            <Button onClick={onEdit} icon="edit" />
            <Button onClick={onDelete} icon="delete" />
          </>
        ) : (
          <>
            <Button onClick={onUndo} icon="undo" />
            <Button onClick={onDelete} icon="delete" />
          </>
        )}
      </Button.Group>
    </List.Item>
  );
};

export default Todo;
