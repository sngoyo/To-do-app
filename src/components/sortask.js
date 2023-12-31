import React from "react";
import "./sortTask.css";
import {useSelector, useDispatch} from "react-redux";
import {sortTasks} from "../redux/actions/taskActions.js";


export const SortTask = () => {
    const task = useSelector((state)=> state.allTasks.tasks);
    const dispatch = useDispatch();

    const handleSorting = ()=> {
       dispatch(sortTasks(task));
    }

    return (
        <div>
            <button className="sortButton" onClick={handleSorting}>Sort Tasks</button>
        </div>
    );
};

