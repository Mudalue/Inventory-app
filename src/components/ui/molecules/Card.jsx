import React, { useState, useEffect } from "react";
import { InputField } from "../atoms/InputField";
import { useLocalStorage } from "../../utils/memory";
const Card = ({ name, title, data }) => {
  const [fields, setFields] = useState([]);
  const [all, setAll] = useLocalStorage("All", []);


  function handleChange(e, key) {
    e.preventDefault();
    const values = { ...fields };
    values[key] = e.target.value;
    setFields(values);
    console.log(fields);
  }
  const submit = (e) => {
    const data = [...all];
    data.push({
      objectType: name,
      title: title,
      field: fields,
    });
    setAll(data);
  };
  console.log(all);
  console.log(fields);
  // useEffect(() => {
  //   all.map((d) => {
  //     let field = d.field;
  //     setInputName(Object.keys(field));
  //     setInputValue(Object.values(field))
  //   });
  // }, []);

  return (
    <>
      <div className="card">
        <div>
          <h6 className="p-0 lh-sm">
            {name} - <span style={{ fontSize: 13 }}>{title}</span>
          </h6>
          <hr />
        </div>
        <div>
          <form>
            {data.map((fields, idx) => (
              <div className="row">
                <div className="col-md-12">
                  <InputField
                    name={fields.value}
                    type={fields.type}
                    handleChange={(e) => handleChange(e, fields.value)}
                  />
                </div>
              </div>
            ))}
            <div className="row" style={{ marginTop: 20 }}>
              <div className="col-md-12">
                <button
                  className="btn btn-dark w-100"
                  onClick={(e) => submit(e)}
                >
                  Add to Inventory
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Card;
