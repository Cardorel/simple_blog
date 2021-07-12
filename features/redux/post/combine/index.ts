import { combineReducers } from "redux";
import { createCommentReducer } from "../../comment/reducers";
import { postReducer } from "../reducers";
import { currentPostReducer } from "../reducers/currentPost";

export let rootReducer = combineReducers({
  allPost : postReducer,
  currentPost : currentPostReducer,
  setComment : createCommentReducer
})