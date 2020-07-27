import React from "react";

import {
  header,
  heading,
  datepicker,
} from "./TodoListDetailsHeader.module.scss";

export default function TodoListDetails({ title }) {
  function handleDateChange() {}
  return (
    <header className={header}>
      <p className={heading}>{title}</p>
      <input type='date' className={datepicker} />
    </header>
  );
}
