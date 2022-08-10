import React, { Component } from "react"
import { FaPlusCircle } from "react-icons/fa"
class InputTodo extends Component {
  state = {
    title: "",
  };
  onChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title);
      this.setState({
        title: "",
      });
    } else {
      alert("Please write item");
    }
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="Add Todo..."
          className="input-text"
          value={this.state.title}
          onChange={this.onChange}
        />
        <button className="input-submit"><FaPlusCircle/></button>
      </form>
    );
  }
}
export default InputTodo;
