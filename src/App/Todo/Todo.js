import React from "react";
import PropTypes from "prop-types";

export default function Todo({ title }) {
  return <li>{title}</li>;
}

Todo.propTypes = {
  title: PropTypes.string,
};
