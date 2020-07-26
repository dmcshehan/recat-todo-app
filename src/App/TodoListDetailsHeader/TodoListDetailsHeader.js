import React from "react";

import { header, heading } from "./TodoListDetailsHeader.module.scss";

export default function TodoListDetails({ title }) {
  return (
    <header className={header}>
      <p className={heading}>{title}</p>
      <input type='date' />
    </header>
  );
}
