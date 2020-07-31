import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { notification, hide } from "./Notification.module.scss";

import { clearAllNotifications } from "../../store/actionCreators/notification";

export default function Notification() {
  const dispatch = useDispatch();
  const { success, error } = useSelector((state) => state.notification);

  useEffect(() => {
    setTimeout(() => {
      dispatch(clearAllNotifications());
    }, 3000);
  }, [success, error]);

  function handleClose() {
    dispatch(clearAllNotifications());
  }

  return success || error ? (
    <div
      className={`notification ${
        success ? "is-success" : error ? "is-danger" : ""
      } ${notification}`}
    >
      <button className='delete' onClick={handleClose}></button>
      {success ? success : error ? error : null}
    </div>
  ) : null;
}
