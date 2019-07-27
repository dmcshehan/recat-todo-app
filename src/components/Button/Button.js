import React from "react";
import styles from "./button.module.css";

const Button = ({ children, style, onClick, disabled }) => {
  return (
    <button
      className={`${styles.btn} ${disabled ? styles.disabled : ""}`}
      style={style ? style : {}}
      onClick={onClick}
      disabled={disabled ? true : false}
    >
      {children}
    </button>
  );
};

export default Button;
