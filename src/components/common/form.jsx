import React, { Component } from "react";
import Input from "./input";
import Joi from "joi-browser";

class Form extends Component {
  state = { data: {}, errors: {} };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data, errors });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);

    return error ? error.details[0].message : null;
  };

  validate = () => {
    const option = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, option);

    if (!error) return null;

    const errors = {};
    const errorDetails = error.details;
    errorDetails.map((item) => {
      errors[item.path[0]] = item.message;
    });
    // console.log(errors);
    return errors;
  };

  renderButton(label) {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  }

  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;

    return (
      <Input
        name={name}
        label={label}
        type={type}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderSelect(id, label, [...options]) {
    const allOptions = [...options].map((option) => (
      <option key={option._id} value={option.name}>
        {option.name}
      </option>
    ));
    console.log(options[0]);

    return (
      <>
        <label htmlFor={id}>{label}</label>
        <select
          className="form-select form-select-sm"
          aria-label=".form-select-sm"
          id={id}
          name={id}
          // value={allOptions[0].value}
        >
          {[...allOptions]}
        </select>
      </>
    );
  }
}

export default Form;
