import { db } from "../../auth/firebase";
import { FETCH_TODO_LISTS_SUCCESS } from "../actionTypes/todoList";

import { hideTodoListForm } from "./todoListForm";

function fetchTodoListsSuccess(todoLists) {
  return {
    type: FETCH_TODO_LISTS_SUCCESS,
    payload: {
      todoLists,
    },
  };
}

function fetchTodoLists() {
  return (dispatch, getState) => {
    const { uid } = getState().user.user;

    db.collection("todoLists")
      .where("uid", "==", uid)
      .onSnapshot(function (querySnapshot) {
        const todoLists = [];
        querySnapshot.forEach(function (doc) {
          todoLists.push({ ...doc.data(), _id: doc.id });
        });

        console.log("fired Again");
        dispatch(fetchTodoListsSuccess(todoLists));
      });
  };
}

function addTodoList(title) {
  return (dispatch, getState) => {
    const { uid } = getState().user.user;

    db.collection("todoLists")
      .add({
        title,
        uid,
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
        dispatch(hideTodoListForm());
      });
  };
}

export { fetchTodoLists, addTodoList };
