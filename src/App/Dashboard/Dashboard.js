import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import TodoList from "../TodoList/TodoList";
import TodoListDetails from "../TodoListDetails/TodoListDetails";

//hooks
import useIsLoggedIn from "../../hooks/useIsLoggedIn";

export default function Dashboard() {
  const isLoggedIn = useIsLoggedIn();

  return isLoggedIn ? (
    <div>
      <div className='columns'>
        <TodoList />
        <TodoListDetails />
      </div>
    </div>
  ) : (
    <Redirect to='/signin' />
  );
}
