import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import TodoList from "../TodoList/TodoList";

//hooks
import useIsLoggedIn from "../../hooks/useIsLoggedIn";

export default function Dashboard() {
  const isLoggedIn = useIsLoggedIn();

  return isLoggedIn ? (
    <div>
      <div class='columns'>
        <TodoList />
      </div>
    </div>
  ) : (
    <Redirect to='/signin' />
  );
}
