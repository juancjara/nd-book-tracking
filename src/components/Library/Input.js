import React, { Component } from "react";

class Input extends Component {
  state = { value: "" };

  onChange = e => {
    const { value } = e.target;
    const { onChange } = this.props;

    this.setState({ value });

    if (onChange) {
      onChange(value);
    }
  };

  render() {
    const { search } = this.state;
    const { placeholder = "" } = this.props;

    return (
      <input
        type="text"
        placeholder={placeholder}
        value={search}
        onChange={this.onChange}
      />
    );
  }
}

export default Input;
