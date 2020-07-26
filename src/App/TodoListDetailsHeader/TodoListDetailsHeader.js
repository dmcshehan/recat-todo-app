import React from "react";

import { details, info, header } from "./TodoListDetailsHeader.module.scss";

export default function TodoListDetails() {
  return (
    <header className={header}>
      <div className='title is-5'>Title </div>
      <input type='date' />
    </header>
  );
}
