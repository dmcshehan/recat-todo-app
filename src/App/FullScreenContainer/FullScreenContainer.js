import React from "react";
import { background } from "./FullScreenContainer.module.scss";

export default function FullScreenWrapper({ children }) {
  return <div className={background}>{children}</div>;
}
