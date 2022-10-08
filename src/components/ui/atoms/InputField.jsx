import React from "react";

export const InputField = ({
  placeholder,
  name,
  type,
  label,
  handleChange,
  value,
  background,
  required,
}) => {
  return (
    <>
      <div>
        {name && (
          <label htmlFor={name} className={`${label}`}>
            {name}
          </label>
        )}
        <input
        className="form-control"
          value={value}
          placeholder={placeholder}
          type={type}
          onChange={handleChange}
          style={{
            boxShadow: "none",
            backgroundColor: `${background}`,
            margin: 0,
            fontSize: 13
          }}
          required={required}
        />
      </div>
    </>
  );
};
