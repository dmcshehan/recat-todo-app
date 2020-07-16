import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

//hooks
import useIsLoggedIn from "../../hooks/useIsLoggedIn";

export default function Dashboard() {
  const isLoggedIn = useIsLoggedIn();

  return isLoggedIn ? <div>Dashboard</div> : <Redirect to='/signin' />;
}
