import React from "react";
import "./task.css";
import { MdDeleteForever } from "react-icons/md";
import {useSelector, useDispatch} from "react-redux";
import { deleteTasks } from "../redux/actions/taskActions.js";
import {PriorityCircle}  from "./priorityCircle.js";


export const Task = () => {
    const  task= useSelector((state) => state.allTasks.tasks);
    const dispatch = useDispatch();


    const handleRemove = (id) => {
       dispatch(deleteTasks(id));
    };

    return (

        <div>
        {
        task.map((todo) =>(
                <div key={todo.id} className="taskContainer" style={{backgroundColor: todo.backgroundColor}}>
                  <PriorityCircle priority={todo.priority}/>
                  <p className="taskTitle" style={{color: todo.textColor}}>{todo.title}</p>
                  <span className="VerticalLine"></span>
                  <p className="taskDate"  style={{color: todo.textColor}}>Created at {todo.date}</p>
                  <button className="removeButton" onClick={()=> handleRemove(todo.id)}>
                      <span className="deleteIcon"  style={{color: todo.textColor}}><MdDeleteForever /></span>
                  </button>
                </div>
             ))
        }

        </div>

    );
};



