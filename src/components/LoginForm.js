import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };
  }

  handleNameChange = (event) => {
    const newName = event.target.value;
    this.setState({
      username: newName,
    })
    console.log(newName)
  }

  handlePswdChange = (event) => {
    const newPswd = event.target.value
    this.setState({
      password: newPswd,
    })
    console.log(newPswd)
  }

  handleSubmit = (event) => {
    event.preventDefault()

    if (this.state.username.length === 0 && this.state.password.length === 0) {
      alert("Error")
    } else {
      this.props.onSubmit(this.state)
      console.log(this)
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input
              id="test-username"
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleNameChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="test-password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handlePswdChange}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
