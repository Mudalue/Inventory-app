import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { InputField } from "../ui/atoms/InputField";
import Checkbox from "../ui/atoms/Checkbox";

const Setting = () => {
  const [objectType, setObjectType] = useContext(AppContext);
  const [fields, setFields] = useState([{ value: null, type: "text" }]);
  //set object values
  const addObjectType = () => {
    let data = [...objectType];
    data.push({
      objecttype: "",
      value: "",
    });
    console.log(data)
    setObjectType(data);
  };
console.log(objectType)
  function handleChange(i, event) {
    const values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
  }

  function handleAdd(type) {
    const values = [...fields];
    values.push({ value: null, type: type });
    setFields(values);
  }

  function handleRemove(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="text-end mt-2">
              <button onClick={addObjectType} className="btn btn-success">
                Add Type
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          {objectType.map((objecttype) => (
            <>
              <div className="col-md-4">
                <div
                  className="card"
                  style={{ padding: 20, margin: 5, width: "100%" }}
                >
                  <form>
                    <div className="d-flex">
                      <h6 className="fw-bold">
                        {objecttype.objectType !== null
                          ? "Object Type"
                          : objecttype.objectType}
                      </h6>
                      <div>
                        <button
                          onClick={() => {
                            let value = objecttype.value;
                            const arr = [...objectType];
                            const items = arr.filter(
                              (item) => item.value !== value
                            );
                            console.log(items)
                            setObjectType(items);
                          }}
                        >
                          x
                        </button>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-md-12">
                        <InputField
                          name="Object type"
                          placeholder="object type"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <InputField name="Title" placeholder="title" />
                      </div>
                    </div>
                    <div className="row">
                      <p style={{ marginTop: 10, fontSize: 13 }}>Fields</p>
                      {fields.map((field, idx) => {
                        return (
                          <div className="col-md-12">
                            <div key={`${field}-${idx}`}>
                              {(() => {
                                switch (field.type) {
                                  case "text":
                                    return (
                                      <InputField
                                        type="text"
                                        placeholder="enter text"
                                      />
                                    );
                                  case "checkbox":
                                    return <Checkbox />;
                                  case "number":
                                    return (
                                      <InputField
                                        type="number"
                                        placeholder="enter number"
                                      />
                                    );
                                  case "date":
                                    return (
                                      <InputField
                                        type="date"
                                        placeholder="dd-mm-yyyy"
                                      />
                                    );
                                  default:
                                    return (
                                      <InputField
                                        type="text"
                                        placeholder="enter text"
                                      />
                                    );
                                }
                              })()}
                              <button
                                type="button"
                                onClick={() => handleRemove(idx)}
                                className="text-danger"
                                style={{
                                  border: "none",
                                  backgroundColor: "transparent",
                                }}
                              >
                                x
                              </button>
                            </div>
                          </div>
                        );
                      })}
                      <div
                        className="d-flex justify-content-between"
                        style={{ flexWrap: "wrap" }}
                      >
                        <button
                          type="button"
                          onClick={() => handleAdd("text")}
                          className="btn btn-secondary"
                        >
                          text
                        </button>
                        <button
                          type="button"
                          onClick={() => handleAdd("checkbox")}
                          className="btn btn-secondary"
                        >
                          checkbox
                        </button>
                        <button
                          type="button"
                          onClick={() => handleAdd("number")}
                          className="btn btn-secondary"
                        >
                          number
                        </button>
                        <button
                          type="button"
                          onClick={() => handleAdd("date")}
                          className="btn btn-secondary btn-sm"
                        >
                          date
                        </button>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <button
                          type="button"
                          className="btn btn-dark w-100 py-2 mt-2"
                        >
                          submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Setting;
