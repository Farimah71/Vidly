import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    account: {
      username: "",
      password: "",
    },
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    //call the server
    console.log("submitted");
  };

  render() {
    const { account } = this.state;

    return (
      <>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit} className="col-4">
          <div className="form-group">
            <label htmlFor="username">User name</label>
            <input
              value={account.username}
              onChange={this.handleChange}
              type="text"
              name="username"
              id="username"
              className="form-control mb-2"
              autoFocus
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              value={account.password}
              onChange={this.handleChange}
              type="password"
              name="password"
              id="password"
              className="form-control mb-3"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </>
    );
  }
}

export default LoginForm;
