import React from "react";

const Checkbox = () => {
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
          Default checkbox
        </label>
      </div>
    </>
  );
};

export default Checkbox;
