import {
  HIDE_TODO_LIST_FORM,
  SHOW_TODO_LIST_FORM,
} from "../actionTypes/todoListForm";

function showTodoListForm() {
  return {
    type: SHOW_TODO_LIST_FORM,
  };
}

function hideTodoListForm() {
  return {
    type: HIDE_TODO_LIST_FORM,
  };
}

export { showTodoListForm, hideTodoListForm };
