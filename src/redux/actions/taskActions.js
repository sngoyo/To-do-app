import { actionTypes } from "../contants/actionTypes.js";

export const addTasks = (tasks) => {
    return {
        type: actionTypes.ADD_TASK,
        payload: tasks,
    };
};


export const deleteTasks = (task) => {
    return {
        type: actionTypes.DELETE_TASK,
        payload: task,
    };
};

export const sortTasks = (task) => {
    return {
        type: actionTypes.SORT_TASK,
        payload: task,
    };
};