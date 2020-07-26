import { db } from "../../auth/firebase";
import { FETCH_TODOS_SUCCESS } from "../actionTypes/todo";

function fetchTodosSuccess(todos) {
  return {
    type: FETCH_TODOS_SUCCESS,
    payload: {
      todos,
    },
  };
}

function fetchTodos(_id) {
  return (dispatch, getState) => {
    db.collection("todos")
      .where("todoListId", "==", _id)
      .onSnapshot(function (querySnapshot) {
        const todos = [];
        querySnapshot.forEach(function (doc) {
          todos.push({ ...doc.data(), _id: doc.id });
        });

        dispatch(fetchTodosSuccess(todos));
      });
  };
}

function addTodo(title) {
  return (dispatch, getState) => {
    const { _id } = getState().todoList.selected;

    const completeTodo = {
      title,
      todoListId: _id,
    };

    db.collection("todos")
      .add(completeTodo)
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      });
  };
}

export { fetchTodos, addTodo };
