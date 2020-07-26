import React from "react";
import { background } from "./FullScreenContainer.module.scss";

export default function FullScreenWrapper({ children, ...props }) {
  return (
    <div className={background} {...props}>
      {children}
    </div>
  );
}
