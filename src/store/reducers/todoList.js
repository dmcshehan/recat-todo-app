import produce from "immer";
import {
  FETCH_TODO_LISTS_SUCCESS,
  SELECT_TODO_LIST,
} from "../actionTypes/todoList";

const initialState = {
  todoLists: [],
  selected: null,
};

export default (state = initialState, action) =>
  produce(state, (draftState) => {
    const { type, payload } = action;

    switch (type) {
      case FETCH_TODO_LISTS_SUCCESS:
        const { todoLists } = payload;
        draftState.todoLists = todoLists;
        break;

      case SELECT_TODO_LIST:
        const { todoList } = payload;
        draftState.selected = todoList;
        break;
      default:
        break;
    }
  });
