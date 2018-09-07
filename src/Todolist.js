import React, { Component, Fragment } from "react";
import TodoItem from "./TodoItem";
import "./style.css";
class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: "",
      list: []
    };
  }
  handleChange(e) {
    const val = e.target.value;
    this.setState(() => ({
      inputVal: val
    }));
  }
  handleClick() {
    this.setState({
      list: [...this.state.list, this.state.inputVal],
      inputVal: ""
    });
  }
  handleItemDelete(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list
    });
  }
  render() {
    return (
      <Fragment>
        <input
          type="text"
          value={this.state.inputVal}
          onChange={this.handleChange.bind(this)}
        />
        <button onClick={this.handleClick.bind(this)}>提交</button>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <TodoItem
                key={index}
                item={item}
                index={index}
                handleItemDelete={this.handleItemDelete.bind(this)}
              />
            );
          })}
        </ul>
      </Fragment>
    );
  }
}
export default Todolist;
