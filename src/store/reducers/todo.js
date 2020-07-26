import produce from "immer";
import { FETCH_TODOS_SUCCESS } from "../actionTypes/todo";

const initialState = {
  todos: [],
};

export default (state = initialState, action) =>
  produce(state, (draftState) => {
    const { type, payload } = action;

    switch (type) {
      case FETCH_TODOS_SUCCESS:
        const { todos } = payload;
        draftState.todos = todos;
        break;

      default:
        break;
    }
  });
