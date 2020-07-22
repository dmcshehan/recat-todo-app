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
        const { todoLists } = payload;

        draftState.todoLists = todoLists;
        break;
      default:
        break;
    }
  });
