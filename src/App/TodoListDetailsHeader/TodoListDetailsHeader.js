import React from "react";

import { details, info, header } from "./TodoListDetailsHeader.module.scss";

export default function TodoListDetails({ title }) {
  return (
    <header className={header}>
      <div className='title is-5'>{title}</div>
      <input type='date' />
    </header>
  );
}
