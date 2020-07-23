import { db } from "../../auth/firebase";
import { FETCH_TODO_LISTS_SUCCESS } from "../actionTypes/todoList";

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
      .get()
      .then(function (querySnapshot) {
        const todoLists = [];
        querySnapshot.forEach(function (doc) {
          todoLists.push({ ...doc.data(), _id: doc.id });
        });

        dispatch(fetchTodoListsSuccess(todoLists));
      });
  };
}

export { fetchTodoLists };
