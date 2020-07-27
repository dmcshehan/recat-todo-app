import produce from "immer";
import { HIDE_TODO_FORM, SHOW_TODO_FORM } from "../actionTypes/todoForm";

const initialState = {
  showTodoForm: false,
};

export default (state = initialState, action) =>
  produce(state, (draftState) => {
    const { type } = action;

    switch (type) {
      case HIDE_TODO_FORM:
        draftState.showTodoForm = false;
        break;

      case SHOW_TODO_FORM:
        draftState.showTodoForm = true;
        break;
      default:
        break;
    }
  });
