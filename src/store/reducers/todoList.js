import produce from "immer";
import { FETCH_TODO_LISTS_SUCCESS } from "../actionTypes/todoList";

const initialState = {
  todoLists: [],
};

export default (state = initialState, action) =>
  produce(state, (draftState) => {
    const { type, payload } = action;
    switch (type) {
      case FETCH_TODO_LISTS_SUCCESS:
        draftState.todoLists = payload.todoLists;
        break;
      default:
        break;
    }
  });
