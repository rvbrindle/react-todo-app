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
            this.props.addTodoItem(this.state.value);
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
