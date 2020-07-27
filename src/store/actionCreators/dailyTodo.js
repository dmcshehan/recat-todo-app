import moment from "moment";
import { SET_SELECTED_DATE } from "../actionTypes/dailyTodo";

function onSetSelectedDate(date) {
  return {
    type: SET_SELECTED_DATE,
    payload: {
      date,
    },
  };
}
function setSelectedDate(date) {
  return (dispatch, getState) => {
    dispatch(onSetSelectedDate(moment(date).format("YYYY-MM-DD")));
  };
}

export { setSelectedDate };
