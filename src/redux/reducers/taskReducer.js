import { actionTypes } from "../contants/actionTypes.js";


const initial_state = {
    tasks: [],
};

export const taskReducer = (state = initial_state, action) => {
    console.log("Action dispatched:", action);
    switch (action.type) {
        case actionTypes.ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            };
            break;

        case actionTypes.DELETE_TASK:
            const updatedTasks = state.tasks.filter((task) => task.id !== action.payload);
            return {
                ...state,
                tasks: updatedTasks,
            };

        case actionTypes.SORT_TASK:
            const sortedTasks = action.payload.slice().sort((a, b) => a.positionOfPriority > b.positionOfPriority ? 1 : -1);
            return {
                ...state,
                tasks: sortedTasks,
            };

        default:
            return state;
    };
};