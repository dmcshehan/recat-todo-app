import produce from "immer";
import {
  HIDE_TODO_LIST_FORM,
  SHOW_TODO_LIST_FORM,
} from "../actionTypes/todoListForm";

const initialState = {
  showTodoListForm: false,
};

export default (state = initialState, action) =>
  produce(state, (draftState) => {
    const { type, payload } = action;

    switch (type) {
      case HIDE_TODO_LIST_FORM:
        draftState.showTodoListForm = false;
        break;

      case SHOW_TODO_LIST_FORM:
        draftState.showTodoListForm = true;
        break;
      default:
        break;
    }
  });
