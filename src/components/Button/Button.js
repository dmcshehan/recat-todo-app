import React from "react";
import styles from "./button.module.css";

const Button = ({ children, style, onClick, disabled, rounded, type }) => {
  return (
    <button
      className={`${styles.btn} ${disabled ? styles.disabled : ""} ${
        rounded ? styles.rounded : ""
      }`}
      style={style ? style : {}}
      onClick={onClick}
      disabled={disabled ? true : false}
      type={type ? type : "button"}
    >
      {children}
    </button>
  );
};

export default Button;
