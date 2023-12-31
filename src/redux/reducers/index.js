import { combineReducers } from "redux";
import { taskReducer } from "./taskReducer.js";

export const reducers = combineReducers({
    allTasks: taskReducer,
});