import { db } from "../../auth/firebase";
import { FETCH_TODOS_SUCCESS } from "../actionTypes/todo";
import { hideTodoForm } from "./todoForm";

function fetchTodosSuccess(todos) {
  return {
    type: FETCH_TODOS_SUCCESS,
    payload: {
      todos,
    },
  };
}

function fetchTodos(selected) {
  return (dispatch, getState) => {
    const { _id } = selected;
    const query = db.collection("todos").where("todoListId", "==", _id);

    const unsubscribe = query.onSnapshot(function (querySnapshot) {
      const todos = [];
      querySnapshot.forEach(function (doc) {
        todos.push({ ...doc.data(), _id: doc.id });
      });

      dispatch(fetchTodosSuccess(todos));
    });

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
      completeTodo.dateTime = new Date(selectedDate);
    } else {
      completeTodo.dateTime = new Date();
    }

    console.log(completeTodo);

    return new Promise(function (resolve, reject) {
      db.collection("todos")
        .add(completeTodo)
        .then(function (docRef) {
          resolve(docRef.id);
          dispatch(hideTodoForm());
          console.log("Document written with ID: ", docRef.id);
        });
    });
  };
}

function updateTodo(_id, mergeObject) {
  return (dispatch, getState) => {
    db.collection("todos")
      .doc(_id)
      .update(mergeObject)
      .then(function (docRef) {
        console.log("Document successfully updated!");
      });
  };
}

function deleteTodo(_id) {
  return (dispatch, getState) => {
    db.collection("todos")
      .doc(_id)
      .delete()
      .then(function () {
        console.log("Document successfully deleted!");
      });
  };
}

export { fetchTodos, addTodo, updateTodo, deleteTodo, fetchTodosSuccess };
