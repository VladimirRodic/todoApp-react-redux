import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import visibilityReducer from "./visibilityReducer";

export default combineReducers({
  todos: todoReducer,
  visibility: visibilityReducer
});
