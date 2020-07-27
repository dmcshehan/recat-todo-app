import { HIDE_TODO_FORM, SHOW_TODO_FORM } from "../actionTypes/todoForm";

function showTodoForm() {
  return {
    type: SHOW_TODO_FORM,
  };
}

function hideTodoForm() {
  return {
    type: HIDE_TODO_FORM,
  };
}

export { hideTodoForm, showTodoForm };
