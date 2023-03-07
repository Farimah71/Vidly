import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <>
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input {...rest} name={name} id={name} className="form-control mb-2" />
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
    </>
  );
};

export default Input;
