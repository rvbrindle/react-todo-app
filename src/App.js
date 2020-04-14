import React, { Component } from "react";
import classes from "./App.module.scss";
import UserInput from "./components/UserInput";
import ToDoList from "./components/ToDoList";
import DoneList from "./components/DoneList";

class App extends Component {
  state = {
    toDos: [],
    completed: [],
    time: "",
  };

  addTodoItem = (toDoItem) => {
    this.setState({
      toDos: [...this.state.toDos, toDoItem],
    });
  };

  deleteToDoItem = (key) => {
    let todos = this.state.toDos;
    todos.splice(key, 1);

    this.setState({
      toDos: todos,
    });
  };

  completedItem = (key) => {
    let completedItem = this.state.toDos[key]; // store element for completed list

    this.deleteToDoItem(key); // remove selected element

    this.setState({
      completed: [...this.state.completed, completedItem],
      time: this.getTime(),
    });

    console.log(this.state.time);
  };

  getTime = () => {
    let date = new Date();

    const time = {
      year: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDate(),
      hour: date.getHours(),
      mins: date.getMinutes(),
    };

    return time;
  };

  render() {
    return (
      <div className={classes.App}>
        <h1> Todo</h1>
        <UserInput addTodoItem={this.addTodoItem}></UserInput>
        <ToDoList
          toDos={this.state.toDos}
          deleteToDoItem={this.deleteToDoItem}
          completedItem={this.completedItem}
        ></ToDoList>
        <DoneList
          completed={this.state.completed}
          time={this.state.time}
        ></DoneList>
      </div>
    );
  }
}

export default App;
