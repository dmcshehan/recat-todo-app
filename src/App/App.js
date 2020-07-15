import React from "react";
import FullScreenContainer from "./FullScreenContainer/FullScreenContainer";
import classNames from "./App.module.scss";

import Navbar from "./Navbar/Navbar";
export default function App() {
  return (
    <FullScreenContainer>
      <div className={classNames.app}>
        <Navbar />
      </div>
    </FullScreenContainer>
  );
}
