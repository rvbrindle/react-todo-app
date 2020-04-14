import React, { Component } from "react";

class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  checkInput = () => {
    if (!this.state.value) {
      alert("Please add text");
    } else {
      this.props.addTodoItem(this.state.value);
    }
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="to do..."
        />
        <button
          type="button"
          onClick={() => {
            this.checkInput();
            this.setState({ value: "" });
          }}
        >
          SUBMIT
        </button>
      </div>
    );
  }
}
export default UserInput;
