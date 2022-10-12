import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { InputField } from "../ui/atoms/InputField";
import Checkbox from "../ui/atoms/Checkbox";

const Setting = () => {
  const [category, setCategory] = useContext(AppContext);
  const [fields, setFields] = useState([{ value: "", type: "text" }]);
  const [updateFields, setUpdateFields] = useState([{value: ""}]);
  const [item, setItem] = useState("");
  const [title, setTitle] = useState("");
  const [show, setShow] = useState(false);
  const [input, setInput] = useState([]);
  const [updateItem, setUpdateItem] = useState("");
  const [updateTitle, setUpdateTitle] = useState("");
  //set object values
  const addObjectType = () => {
    setShow(!show);
  };

  function handleChanging(i, e) {
    const values = [...fields];
    values[i].value = e.target.value;
    setFields(values);
  }
  function handleChange(e, i) {
    const values = [...updateFields];
    values[i].value = e.target.value;
    setUpdateFields(values);
    console.log(updateFields);
  }

  function handleAdd(type, data, setData) {
    const values = [...data];
    values.push({ value: "", type: type, name: "" });
    // setFields(values);
    setData(values);
  }
  function handleRemove(i, data, setData) {
    const values = [...data];
    values.splice(i, 1);
    setData(values);
  }
  //submit
  const submit = () => {
    const data = [...category];
    data.push({
      objectType: item,
      title: title,
      field: fields,
    });
    setCategory(data);
    window.location.reload();
  };
  console.log(category);

  //remove
  const remove = (objectname) => {
    let value = objectname;
    const arr = [...category];
    const items = arr.filter((item) => item.objectType !== value);
    setCategory(items);
  };
  //update
  // const update = (name) => {

  // };
  // useEffect(() => {
  //   category.map((c) => console.log(c.field));
  // }, []);
  console.log(updateFields);
  console.log(updateItem);
  console.log(updateTitle);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="text-end mt-2">
              <button onClick={addObjectType} className="btn btn-success">
                Add machine
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          {category === null ? (
            <>
              <p style={{ fontSize: 16 }} className="text-danger">
                no item available!!
              </p>
            </>
          ) : (
            <>
              {category.map((categories) => (
                <>
                  <div className="col-md-4">
                    <div
                      className="card"
                      style={{ padding: 20, margin: 5, width: "100%" }}
                    >
                      <div className="text-end">
                        <button
                          className="btn btn-danger"
                          onClick={() => remove(categories.objectType)}
                        >
                          x
                        </button>
                      </div>
                      <form>
                        <div className="d-flex justify-content-between">
                          <h6 className="fw-bold">{categories.objectType}</h6>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-md-12">
                            <InputField
                              name="Machine name"
                              placeholder="object type"
                              handleChange={({ target: { value } }) =>
                                setUpdateItem(value)
                              }
                              value={
                                updateItem === ""
                                  ? categories.objectType
                                  : updateItem
                              }
                              defaultvalue={categories.objectType}
                              readonly={true}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <InputField
                              name="Title"
                              placeholder="title"
                              handleChange={({ target: { value } }) =>
                                setUpdateTitle(value)
                              }
                              defaultvalue={categories.title}
                              readonly={true}
                            />
                          </div>
                        </div>
                        <div className="row">
                          {categories.field.map((field, idx) => {
                            return (
                              <>
                                <InputField
                                  name={field.value}
                                  value={field.value}
                                  key={idx}
                                  type={field.type}
                                  defaultvalue={field.value}
                                  readonly={true}
                                />
                              </>
                            );
                          })}
                        </div>
{/* 
                        <div className="row">
                          <p style={{ marginTop: 10, fontSize: 13 }}>Fields</p>
                          {categories.field.map((field, idx) => {
                            return (
                              <div className="col-md-12">
                                <div key={`${field}-${idx}`}>
                                  {(() => {
                                    switch (field.type) {
                                      case "text":
                                        return (
                                          <InputField
                                            name={field.value}
                                            type="text"
                                            placeholder="enter text"
                                            handleChange={(e, idx) =>
                                              handleChange(e, idx)
                                            }
                                          />
                                        );
                                      case "checkbox":
                                        return <Checkbox name={field.value} />;
                                      case "number":
                                        return (
                                          <InputField
                                            name={field.value}
                                            type="number"
                                            value={field.value}
                                            placeholder="enter number"
                                            handleChange={(e) =>
                                              handleChange(
                                                idx,
                                                e,
                                                updateFields,
                                                setUpdateFields
                                              )
                                            }
                                          />
                                        );
                                      case "date":
                                        return (
                                          <InputField
                                            value={field.value}
                                            name={field.value}
                                            type="date"
                                            placeholder="dd-mm-yyyy"
                                            handleChange={(e) =>
                                              handleChange(
                                                idx,
                                                e,
                                                updateFields,
                                                setUpdateFields
                                              )
                                            }
                                          />
                                        );
                                      default:
                                        return (
                                          <InputField
                                            defaultvalue={field.value}
                                            name={field.value}
                                            type="text"
                                            placeholder="enter text"
                                            handleChange={(e) =>
                                              handleChange(
                                                idx,
                                                e,
                                                updateFields,
                                                setUpdateFields
                                              )
                                            }
                                          />
                                        );
                                    }
                                  })()}
                                  <button
                                    type="button"
                                    onClick={() =>
                                      handleRemove(
                                        idx,
                                        updateFields,
                                        setUpdateFields
                                      )
                                    }
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
                        </div> */}
                        {/* <div className="row">
                          <div className="col-md-12">
                            <button
                              type="button"
                              className="btn btn-dark w-100 py-2 mt-2"
                              onClick={() => {
                                let arr = [...category];
                                let index = arr.findIndex(
                                  (_index) =>
                                    _index.objectType === categories.objectType
                                );
                                console.log(index);
                                const getItem = arr.filter(
                                  (obj) =>
                                    obj.objectType === categories.objectType
                                );
                                console.log(getItem);
                                let update = getItem[0];
                                update.objectType = categories.objectType;
                                update.title = categories.title;
                                update.field = updateFields;
                                arr[index] = update;
                                console.log(update);
                                setCategory(update);
                              }}
                            >
                              update
                            </button>
                          </div>
                        </div> */}
                      </form>
                    </div>
                  </div>
                </>
              ))}
            </>
          )}
          {show && (
            <>
              <>
                <div className="col-md-4">
                  <div
                    className="card"
                    style={{ padding: 20, margin: 5, width: "100%" }}
                  >
                    <form onSubmit={submit}>
                      <div className="d-flex justify-content-between">
                        <h6 className="fw-bold">object type</h6>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-md-12">
                          <InputField
                            name="Machine type"
                            placeholder="machine type"
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
                                          name={field.value}
                                          type="text"
                                          placeholder="enter text"
                                          handleChange={(e) =>
                                            handleChanging(idx, e)
                                          }
                                        />
                                      );
                                    case "checkbox":
                                      return <Checkbox />;
                                    case "number":
                                      return (
                                        <InputField
                                          name={field.value}
                                          type="number"
                                          placeholder="enter number"
                                          handleChange={(e) =>
                                            handleChanging(idx, e)
                                          }
                                        />
                                      );
                                    case "date":
                                      return (
                                        <InputField
                                          name={field.value}
                                          type="date"
                                          placeholder="dd-mm-yyyy"
                                          handleChange={(e) =>
                                            handleChanging(idx, e)
                                          }
                                        />
                                      );
                                    default:
                                      return (
                                        <InputField
                                          name={field.value}
                                          type="text"
                                          placeholder="enter text"
                                          handleChange={(e) =>
                                            handleChanging(idx, e)
                                          }
                                        />
                                      );
                                  }
                                })()}
                                <button
                                  type="button"
                                  onClick={() =>
                                    handleRemove(idx, fields, setFields)
                                  }
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
                            onClick={() => handleAdd("text", fields, setFields)}
                            className="btn btn-secondary"
                          >
                            text
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              handleAdd("checkbox", fields, setFields)
                            }
                            className="btn btn-secondary"
                          >
                            checkbox
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              handleAdd("number", fields, setFields)
                            }
                            className="btn btn-secondary"
                          >
                            number
                          </button>
                          <button
                            type="button"
                            onClick={() => handleAdd("date", fields, setFields)}
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
                            Add to Inventory
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Setting;
