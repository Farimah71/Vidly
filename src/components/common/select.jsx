import React from "react";

const Select = ({ name, label, error, options, ...rest }) => {
  const allOptions = options.map((option) => (
    <option key={option._id} value={option._id}>
      {option.name}
    </option>
  ));

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        className="form-select form-select mb-2"
        aria-label=".form-select-sm"
        id={name}
        name={name}
        {...rest}
      >
        <option value=""></option>
        {allOptions}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Select;
