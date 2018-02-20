import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
    };
  }

  handleChange = (event) => {
    const newValue = event.target.value

    this.setState({
      value: newValue,
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <p>Chars remaining: {this.props.maxChars - this.state.value.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
