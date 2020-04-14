import React from "react";
import classes from "./ToDoList.module.scss";

const ToDoList = (props) => {
  const items = props.toDos.map((todo, key) => {
    return (
      <li key={key}>
        <div className={classes.list__btn}>
          <div
            className={classes.list__btn_del}
            onClick={() => props.deleteToDoItem(key)}
          >
            &#10008;
          </div>
          <div
            className={classes.list__btn_done}
            onClick={() => props.completedItem(key)}
          >
            &#10004;
          </div>
        </div>
        <p> {todo} </p>
      </li>
    );
  });

  return (
    <div className={classes.toDo}>
      <ul className={classes.list}>{items}</ul>
    </div>
  );
};

export default ToDoList;
