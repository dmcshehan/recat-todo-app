import produce from "immer";

import {
  CHANGE_SCREEN_SIZE,
  CHANGE_MOBILE_TODO_LIST_STATUS,
} from "../actionTypes/ui";

const initialState = {
  screenSize: null,
  isMobileTodoListOpen: false,
};

export default (state = initialState, action) =>
  produce(state, (draftState) => {
    const { type, payload } = action;

    switch (type) {
      case CHANGE_SCREEN_SIZE:
        draftState.screenSize = payload.screenSize;
        break;

      case CHANGE_MOBILE_TODO_LIST_STATUS:
        if (payload.isMobileTodoListOpen) {
          draftState.isMobileTodoListOpen = payload.isMobileTodoListOpen;
        } else {
          draftState.isMobileTodoListOpen = !draftState.isMobileTodoListOpen;
        }

        break;

      default:
        break;
    }
  });
