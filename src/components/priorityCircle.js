import React from "react";
import "./priorityCircle.css";

 export const PriorityCircle = (props) => {
     const priorityColor = props.priority;

     const colorChecker =()=>{
         if(priorityColor == "high") {
             return {"color": "red", "colorCode": "H"};
         } else if (priorityColor == "medium"){
            return {"color": "yellow", "colorCode": "M"};
         } else {
            return {"color": "blue", "colorCode": "L"};
         }
     };

    return (
        <>
            <div className="priorityColorCircle" style={{backgroundColor: colorChecker().color}}>
                <div className="PriorityAlphabet">
                    {colorChecker().colorCode}
                </div>
            </div>
        </>
    );
};

