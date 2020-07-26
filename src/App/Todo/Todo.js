import React from "react";
import PropTypes from "prop-types";

import { todo } from "./Todo.module.scss";
export default function Todo({ title }) {
  return (
    <li className={todo}>
      <input type='radio' name='' id='' />
      {title}
    </li>
  );
}

Todo.propTypes = {
  title: PropTypes.string,
};
