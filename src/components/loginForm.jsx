import React, { Component } from "react";
import Input from "./common/input";

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
          <Input
            type={"text"}
            name={"username"}
            label={"User Name"}
            value={account.username}
            onChange={this.handleChange}
          />

          <Input
            type={"password"}
            name={"password"}
            label={"Password"}
            value={account.password}
            onChange={this.handleChange}
          />

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </>
    );
  }
}

export default LoginForm;
