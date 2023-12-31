import React, {useState, useEffect} from "react";
import "./taskComponent.css";
import { Task } from  "./task.js";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useDispatch} from "react-redux";
import { addTasks} from "../redux/actions/taskActions.js";
import {v4 as uuidv4} from  "uuid";
import {SortTask} from "./sortask.js";



export const TaskComponent = () => {
   const [title, setTitle] = useState("");
   const [date,setDate] = useState("");
   const [optionSelected, setOptionSelected] =useState("");
   const dispatch = useDispatch();
   const [textColor, setTextColor] = useState("");
   const [backgroundColor, setBackgroundColor] = useState("");
   const [positionOfPriority, setPositionOfPriority] = useState("");


 //Two function are called which have side effects
useEffect(() => {
   colorGenerator();
   dateGenerator();
   positionOfPriorityGenerator();
},[title]);


const positionOfPriorityGenerator = ()=> {
     if (optionSelected === "high"){
        setPositionOfPriority("1");
     } else if(optionSelected === "medium"){
        setPositionOfPriority("2");
     } else {
        setPositionOfPriority("3");
     }
}

const colorGenerator = () => {
   const colorList= [
   {"color":"#000000", "background":"#48cae4"},
   {"color":"#000000", "background":"#b7b7a4"},
   {"color":"#000000", "background":"#40916c"},
   {"color":"#FFFFFF", "background":"#9d0208"}
];
   const randomValue = Math.floor(Math.random() * 4);
   setTextColor(colorList[randomValue].color);
   setBackgroundColor(colorList[randomValue].background);
}

//Date generator function
const dateGenerator = () => {
     setDate(new Date().getHours()+":"+ new Date().getMinutes());
}

  //This function Handle user input when user press "Enter" key
  const handleKeyDown = (event) => {
   if (event.key === "Enter"){
      if (title === ""){
         showToastMessage();
      } else {
        dispatch(addTasks({"id": uuidv4(), "positionOfPriority": positionOfPriority, "priority": optionSelected, "textColor": textColor, "backgroundColor": backgroundColor, "title": title,"date": date.toString()}));
        setTitle("");
     };
           };
};

   useEffect(() => {
      //Adding event listener!
      document.addEventListener("keydown", handleKeyDown);
      //Cleaning up
      return () => {
         document.removeEventListener("keydown", handleKeyDown);
      };

   },[handleKeyDown]);

//Capture input from user after typing in the field box
   const handleChange = (event) => {
      event.preventDefault();
      setTitle(event.target.value);
   };

   const handleOptionsSelected = (event) => {
      setOptionSelected(event.target.value);
   }

   //Showing warning message to user
   const showToastMessage = () => {
      toast.error("Please Enter Task !", {
        position: toast.POSITION.TOP_CENTER,
      });
   };

//handling input from user after submittion
   const handleSubmit = () => {
      if (title === ""){
         showToastMessage();
      } else {
        dispatch(addTasks({"id": uuidv4(), "positionOfPriority": positionOfPriority, "priority": optionSelected, "textColor": textColor, "backgroundColor": backgroundColor, "title": title,"date": date.toString()}));
        setTitle("");
        setOptionSelected("Select priority");
     };
   };


   return (
      <div>
         <div className="Main-container">
          <select className="prioritySelector" value={optionSelected} onChange={handleOptionsSelected}>
             <option value="">Select priority</option>
             <option value="high">High</option>
             <option value="medium">Medium</option>
             <option value="low">Low</option>
          </select>
          <input className="taskInput" value ={title} type="text" onChange={handleChange}
          placeholder="Enter task here" />
          <button className="submitButton" type="submit" onClick={handleSubmit} onKeyDown={handleKeyDown}>Add</button>
          <SortTask />
          <ToastContainer />
         </div>
        <Task />

      </div>

   );

}




