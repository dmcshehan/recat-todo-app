import classNames from "./App.module.scss";

import React, { useEffect } from "react";
import firebase from "../auth/firebase";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import { userLoginSuccess } from "../store/actionCreators/user";
import { closeDropdown } from "../store/actionCreators/dropdown";

//Components
import FullScreenContainer from "./FullScreenContainer/FullScreenContainer";
import DropDown from "./Dropdown/Dropdown";
import Dashboard from "./Dashboard/Dashboard";
import Navbar from "./Navbar/Navbar";
import Container from "./Container/Container";

//Pages
import NotFound from "./404/404";
import Home from "./Home/Home";
import Signin from "./Signin/Signin";

//hooks
import isLoggedIn from "../hooks/useIsLoggedIn";

export default function App() {
  const { isDropdownOpen } = useSelector((state) => state.dropDown);
  const isUserLoggedIn = isLoggedIn();

  const dispatch = useDispatch();
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (loggedInUser) {
      if (loggedInUser) {
        dispatch(userLoginSuccess(loggedInUser));
      }
    });
  }, [isUserLoggedIn]);

  function handleBackgroundClick() {
    if (isDropdownOpen) {
      dispatch(closeDropdown());
    }
  }

  return (
    <React.StrictMode>
      <BrowserRouter>
        <FullScreenContainer onClick={handleBackgroundClick}>
          <div className={classNames.app}>
            <Navbar />
            <DropDown />
            <Container>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/signin' component={Signin} />
                <Route exact path='/dashboard' component={Dashboard} />
                <Route path='/' component={NotFound} />
              </Switch>
            </Container>
          </div>
        </FullScreenContainer>
      </BrowserRouter>
    </React.StrictMode>
  );
}
