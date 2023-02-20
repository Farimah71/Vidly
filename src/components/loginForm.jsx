import React, { Component } from "react";
import Input from "./common/input";
import Form from "./common/form";
import Joi from "joi-browser";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  toSubmit = () => {
    //call the server
    console.log("submitted");
  };

  render() {
    const { data, errors } = this.state;

    return (
      <>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit} className="col-4">
          <Input
            type={"text"}
            name={"username"}
            label={"User Name"}
            value={data.username}
            onChange={this.handleChange}
            error={errors.username}
          />

          <Input
            type={"password"}
            name={"password"}
            label={"Password"}
            value={data.password}
            onChange={this.handleChange}
            error={errors.password}
          />

          <button
            disabled={this.validate()}
            type="submit"
            className="btn btn-primary"
          >
            Login
          </button>
        </form>
      </>
    );
  }
}

export default LoginForm;
