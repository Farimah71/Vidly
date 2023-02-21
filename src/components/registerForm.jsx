import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class RegisterForm extends Form {
  state = {
    data: { email: "", password: "", name: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().min(5).label("Password"),
    name: Joi.string().label("Name"),
  };

  doSubmit = () => {
    //call the server
    console.log("Registered");
  };

  render() {
    return (
      <>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit} className="col-4">
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </>
    );
  }
}

export default RegisterForm;
