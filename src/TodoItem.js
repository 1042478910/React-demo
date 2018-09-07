import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.handleItemDelete(this.props.index);
  }
  render() {
    const { item, test } = this.props;
    return (
      <div onClick={this.handleClick}>
        {item} +++++
        {test}
      </div>
    );
  }
}
TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.string,
  handleItemDelete: PropTypes.func,
  index: PropTypes.number
};
TodoItem.defaultProps = {
  test: "hello"
};
