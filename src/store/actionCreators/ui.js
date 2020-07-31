import {
  CHANGE_SCREEN_SIZE,
  CHANGE_MOBILE_TODO_LIST_STATUS,
} from "../actionTypes/ui";

function changeScreenSize(screenSize) {
  return {
    type: CHANGE_SCREEN_SIZE,
    payload: {
      screenSize,
    },
  };
}

function changeMobileTodoListStatus(isMobileTodoListOpen) {
  return {
    type: CHANGE_MOBILE_TODO_LIST_STATUS,
    payload: {
      isMobileTodoListOpen,
    },
  };
}

export { changeScreenSize, changeMobileTodoListStatus };
