import React from "react";

const doneList = (props) => {
  console.log(props.time);
  const doneList = props.completed.map((item, index) => {
    return <li key={index}>completed</li>;
  });
  return <ul>{doneList}</ul>;
};

export default doneList;
