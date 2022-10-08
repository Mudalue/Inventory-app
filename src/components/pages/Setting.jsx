import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { InputField } from "../ui/atoms/InputField";
import Checkbox from "../ui/atoms/Checkbox";
import { useLocalStorage } from "../utils/memory";

const Setting = () => {
  const [category, setCategory] = useContext(AppContext);
  //   const [category, setCategory] = useContext(AppContext);
  const [fields, setFields] = useState([{ value: "", type: "text" }]);
  const [objectType, setObjectType] = useLocalStorage("object-type", []);
  const [item, setItem] = useState("");
  const [title, setTitle] = useState("");
  //set object values
  const addObjectType = () => {
    let data = [...objectType];
    data.push({
      objecttype: "",
      title: "",
      field: fields,
    });
    console.log(data);
    setObjectType(data);
  };
  console.log(objectType);
  function handleChange(i, e) {
    const values = [...fields];
    values[i].value = e.target.value;
    setFields(values);
  }

  function handleAdd(type) {
    const values = [...fields];
    values.push({ value: "", type: type });
    setFields(values);
  }

  function handleRemove(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }

  const submit = () => {
    const data = [...category];
    data.push({
      objectType: item,
      title: title,
      field: fields,
    });
    setCategory(data);
  };
  console.log(category);
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
          {objectType.length === 0 ? (
            <>
              <p style={{fontSize: 16}} className="text-danger">no item available!!</p>
            </>
          ) : (
            <>
              {" "}
              {objectType.map((objecttype) => (
                <>
                  <div className="col-md-4">
                    <div
                      className="card"
                      style={{ padding: 20, margin: 5, width: "100%" }}
                    >
                      <form onSubmit={submit}>
                        <div className="d-flex justify-content-between">
                          <h6 className="fw-bold">
                            {objecttype.objectType !== null
                              ? "Object Type"
                              : objecttype.objectType}
                          </h6>
                          <div>
                            <button
                            className="btn btn-danger"
                              onClick={() => {
                                let value = objecttype.value;
                                const arr = [...objectType];
                                const items = arr.filter(
                                  (item) => item.value !== value
                                );
                                console.log(items);
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
                              handleChange={({ target: { value } }) =>
                                setItem(value)
                              }
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <InputField
                              name="Title"
                              placeholder="title"
                              handleChange={({ target: { value } }) =>
                                setTitle(value)
                              }
                            />
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
                                            handleChange={(e) =>
                                              handleChange(idx, e)
                                            }
                                          />
                                        );
                                      case "checkbox":
                                        return <Checkbox />;
                                      case "number":
                                        return (
                                          <InputField
                                            type="number"
                                            placeholder="enter number"
                                            handleChange={(e) =>
                                              handleChange(idx, e)
                                            }
                                          />
                                        );
                                      case "date":
                                        return (
                                          <InputField
                                            type="date"
                                            placeholder="dd-mm-yyyy"
                                            handleChange={(e) =>
                                              handleChange(idx, e)
                                            }
                                          />
                                        );
                                      default:
                                        return (
                                          <InputField
                                            type="text"
                                            placeholder="enter text"
                                            handleChange={(e) =>
                                              handleChange(idx, e)
                                            }
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
                              onClick={submit}
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
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Setting;
