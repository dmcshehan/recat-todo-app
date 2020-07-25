import {
  HIDE_TODO_LIST_FORM,
  SHOW_TODO_LIST_FORM,
} from "../actionTypes/todoListForm";

function showTodoListForm() {
  return (dispatch, getState) => {
    dispatch({
      type: SHOW_TODO_LIST_FORM,
    });
  };
}

export { showTodoListForm };
