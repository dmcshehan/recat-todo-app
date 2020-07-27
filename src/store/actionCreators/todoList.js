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

    const query = db.collection("todoLists").where("uid", "==", uid);

    const unsubscribe = query.onSnapshot(function (querySnapshot) {
      const todoLists = [];
      querySnapshot.forEach(function (doc) {
        todoLists.push({ ...doc.data(), _id: doc.id });
      });

      const daily = todoLists.find(
        (todoList) => todoList.title === "Daily Todos"
      );
      const indexOfDaily = todoLists.indexOf(daily);
      const arrangedTodoLists = [...todoLists];

      arrangedTodoLists.splice(indexOfDaily, 1);
      arrangedTodoLists.unshift(daily);

      dispatch(fetchTodoListsSuccess(arrangedTodoLists));
    });

    return unsubscribe;
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

function deleteTodoList(_id) {
  return (dispatch, getState) => {
    db.collection("todoLists")
      .doc(_id)
      .delete()
      .then(function () {
        db.collection("todos")
          .where("todoListId", "==", _id)
          .get()
          .then(function (querySnapshot) {
            var batch = db.batch();

            querySnapshot.forEach(function (doc) {
              batch.delete(doc.ref);
            });

            return batch.commit();
          });
      })
      .then(function () {
        console.log("all done");
      });
  };
}

export { fetchTodoLists, addTodoList, selectTodoList, deleteTodoList };
