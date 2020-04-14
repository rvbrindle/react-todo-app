import React from "react";

const doneList = (props) => {
  let date = new Date();

  const time = {
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDate(),
    hour: date.getHours(),
    mins: date.getMinutes(),
  };

  console.log(time);
  const doneList = props.completed.map((item, index) => {
    return (
      <li key={index}>
        completed {item} on {time.year}/{time.month}/{time.day} at {time.hour}:
        {time.mins}
      </li>
    );
  });
  return <ul>{doneList}</ul>;
};

export default doneList;
