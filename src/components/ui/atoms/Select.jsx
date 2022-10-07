import React, {useState} from "react";

const Select = ({ data , handlechange, defaultvalue}) => {
    // const [value, setValue] = useState("")
    //handle change
    // const handlechange = (e) => {
    //     let value = e.target.value;
    //     console.log(value)
    //     setValue(value)
    // }
    // console.log(value)
  return (
    <>
      <select
        class="form-select"
        aria-label="Default select example"
        onChange={handlechange}
        placeholder="Add Field"
      >
        <option selected className="text-center">Add Field</option>
        {data.length === 0 ? (
          <option>No data available</option>
        ) : (
          data.map((item) => <option value={item}>{item}</option>)
        )}
      </select>
    </>
  );
};

export default Select;
