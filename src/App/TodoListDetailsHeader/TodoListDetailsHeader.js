import React from "react";
import moment from "moment";

import {
  header,
  heading,
  datepicker,
} from "./TodoListDetailsHeader.module.scss";

import useDailyTodosSelected from "../../hooks/useIsDailyTodosSelected";

import { useSelector, useDispatch } from "react-redux";
import { setSelectedDate } from "../../store/actionCreators/dailyTodo";

export default function TodoListDetails({ title }) {
  const dispatch = useDispatch();
  const { selectedDate } = useSelector((state) => state.dailyTodo);
  const isDailyTodosSelected = useDailyTodosSelected();

  function handleDateChange(e) {
    dispatch(setSelectedDate(e.target.value));
  }

  return (
    <header className={header}>
      <p className={heading}>{title}</p>
      {isDailyTodosSelected ? (
        <input
          type='date'
          className={datepicker}
          value={moment(selectedDate).format("YYYY-MM-DD")}
          onChange={handleDateChange}
        />
      ) : null}
    </header>
  );
}
