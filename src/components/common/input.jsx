import React from "react";

const Input = ({ type, name, label, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        type={type}
        name={name}
        id={name}
        className="form-control mb-2"
      />
    </div>
  );
};

export default Input;
