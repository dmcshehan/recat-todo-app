import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import userReducer from "./user";

import dropdownReducer from "./dropdown";
import notificationReducer from "./notification";
import todoListReducer from "./todoList";
import todoListFormReducer from "./todoListForm";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["dropDown", "todoListForm"],
};

const rootReducer = combineReducers({
  user: userReducer,
  dropDown: dropdownReducer,
  notification: notificationReducer,
  todoList: todoListReducer,
  todoListForm: todoListFormReducer,
});

export default persistReducer(persistConfig, rootReducer);
