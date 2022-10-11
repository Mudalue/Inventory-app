import React from "react";

const Checkbox = ({name}) => {
  return (
    <>
      <div class="form-check">
        <input
          className="form-check-input pl-5"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label className="form-check-label" for="flexCheckDefault">
          name
        </label>
      </div>
    </>
  );
};

export default Checkbox;
