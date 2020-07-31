import { db } from "../../auth/firebase";
import { FETCH_TODOS_SUCCESS } from "../actionTypes/todo";
import { hideTodoForm } from "./todoForm";

import { fetchDailyTodosBydate } from "./dailyTodo";
import {
  displaySuccessNotification,
  displayErrorNotification,
} from "./notification";

function fetchTodosSuccess(todos) {
  return {
    type: FETCH_TODOS_SUCCESS,
    payload: {
      todos,
    },
  };
}

function fetchTodos(selected) {
  return (dispatch) => {
    const { _id, title } = selected;
    const query = db.collection("todos").where("todoListId", "==", _id);

    let unsubscribe;

    if (title === "Daily Todos") {
      unsubscribe = dispatch(fetchDailyTodosBydate());
    } else {
      unsubscribe = query.onSnapshot(function (querySnapshot) {
        const todos = [];
        querySnapshot.forEach(function (doc) {
          todos.push({ ...doc.data(), _id: doc.id });
        });

        dispatch(fetchTodosSuccess(todos));
      });
    }

    return unsubscribe;
  };
}

function addTodo(todo) {
  return (dispatch, getState) => {
    const { _id, title } = getState().todoList.selected;
    const { selectedDate } = getState().dailyTodo;

    let completeTodo = {
      ...todo,
      todoListId: _id,
    };

    if (title === "Daily Todos") {
      completeTodo.dateTime = new Date(selectedDate); // 00:00:00
    } else {
      completeTodo.dateTime = new Date();
    }

    console.log(completeTodo);

    return new Promise(function (resolve, reject) {
      db.collection("todos")
        .add(completeTodo)
        .then(function (docRef) {
          resolve(docRef.id);
          dispatch(displaySuccessNotification("Todo successfully added!"));
          dispatch(hideTodoForm());
        })
        .catch(function (error) {
          dispatch(displayErrorNotification(error.message));
        });
    });
  };
}

function updateTodo(_id, mergeObject) {
  return (dispatch) => {
    db.collection("todos")
      .doc(_id)
      .update(mergeObject)
      .then(function (docRef) {
        // dispatch(displaySuccessNotification("Todo successfully updated!"));
      })
      .catch(function (error) {
        dispatch(displayErrorNotification(error.message));
      });
  };
}

function deleteTodo(_id) {
  return (dispatch) => {
    db.collection("todos")
      .doc(_id)
      .delete()
      .then(function () {
        dispatch(displaySuccessNotification("Todo successfully deleted!"));
      })
      .catch(function (error) {
        dispatch(displayErrorNotification(error.message));
      });
  };
}

export { fetchTodos, addTodo, updateTodo, deleteTodo, fetchTodosSuccess };
