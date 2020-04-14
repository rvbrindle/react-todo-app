import React from "react";

const doneList = (props) => {
  console.log(props);
  const doneList = props.completed.map((item, index) => {
    return (
      <li key={index}>
        {item} {props.time[index]}
      </li>
    );
  });
  return <ul>{doneList}</ul>;
};

export default doneList;
