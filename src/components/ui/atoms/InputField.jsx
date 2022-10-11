import React from "react";

export const InputField = ({
  placeholder,
  name,
  type,
  label,
  handleChange,
  value,
  background,
  defaultvalue,
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
        name={name}
          className="form-control"
          defaultValue={defaultvalue}
          value={value}
          placeholder={placeholder}
          type={type}
          onChange={handleChange}
          style={{
            boxShadow: "none",
            backgroundColor: `${background}`,
            margin: 0,
            fontSize: 13,
          }}
          required={required}
        />
      </div>
    </>
  );
};
