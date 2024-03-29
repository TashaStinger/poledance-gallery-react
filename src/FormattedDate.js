import React from "react";
import "./FormattedDate.css";

export default function FormattedDate(props) {
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let months = ["Jan", "Fab", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

//   function formatTime(time){
//     if (time < 10) {
//       time = "0" + time;
//     }
//     return time;
//   }

  let dateString = `${days[props.date.getDay()]}, ${props.date.getDate()} ${months[props.date.getMonth()]} ${props.date.getFullYear()}`;
  // console.log(dateString);
  return (
    <div className="FormattedDate">
      {dateString}
    </div>
  )
}