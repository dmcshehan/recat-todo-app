import produce from "immer";
import moment from "moment";

import { SET_SELECTED_DATE } from "../actionTypes/dailyTodo";

const initialState = {
  selectedDate: moment().format("YYYY-MM-DDT00:00:00Z"),
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
