import firebase from "../../auth/firebase";

import * as userActionTypes from "../actionTypes/user";
import { displayErrorNotification } from "./notification";

function onUserLogoutSuccess() {
  return {
    type: userActionTypes.USER_LOGOUT_SUCCESS,
  };
}

function userLoginSuccess(user) {
  return {
    type: userActionTypes.USER_LOGIN_SUCCESS,
    payload: {
      user,
    },
  };
}

function logoutUser() {
  return (dispatch) => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        dispatch(onUserLogoutSuccess());
      })
      .catch(function (error) {
        dispatch(displayErrorNotification(error.message));
      });
  };
}

export { userLoginSuccess, logoutUser };
