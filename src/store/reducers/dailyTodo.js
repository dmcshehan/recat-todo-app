import produce from "immer";
import moment from "moment";

import { SET_SELECTED_DATE } from "../actionTypes/dailyTodo";

const initialState = {
  selectedDate: new Date(moment(new Date()).startOf("day").toString()),
};

export default (state = initialState, action) =>
  produce(state, (draftState) => {
    const { type, payload } = action;

    switch (type) {
      case SET_SELECTED_DATE:
        draftState.selectedDate = payload.date;
        break;

      default:
        break;
    }
  });
