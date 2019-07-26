import React from "react";
import styles from "./button.module.css";

const Button = ({ children, style, onClick }) => {
  return (
    <button
      className={`${styles.btn}`}
      style={style ? style : {}}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
