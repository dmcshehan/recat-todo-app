import { db } from "../../auth/firebase";
import {
  FETCH_TODO_LISTS_SUCCESS,
  SELECT_TODO_LIST,
} from "../actionTypes/todoList";

import { hideTodoListForm } from "./todoListForm";
import { fetchTodos } from "../actionCreators/todo";

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

function onSelectTodoList(todoList) {
  return {
    type: SELECT_TODO_LIST,
    payload: {
      todoList,
    },
  };
}

function selectTodoList(listId) {
  return (dispatch, getState) => {
    const { todoLists } = getState().todoList;
    const selectedList = todoLists.find((list) => list._id === listId);

    dispatch(onSelectTodoList(selectedList));
    dispatch(fetchTodos(listId));
  };
}

export { fetchTodoLists, addTodoList, selectTodoList };
