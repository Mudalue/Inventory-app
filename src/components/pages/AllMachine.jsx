import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { InputField } from "../ui/atoms/InputField";
import { useNavigate } from "react-router-dom";
import Card from "../ui/molecules/Card";
import { getStorageValue, useLocalStorage } from "../utils/memory";

const AllMachine = () => {
  const [category, setCategory] = useContext(AppContext);
  const [show, setShow] = useState(false);
  const [allItem, setAllItem] = useLocalStorage([]);
  const [allInventory, setAllInventory] = useState([]);
  const [prop, setProp] = useState([]);
  const [value, setValue] = useState([]);
  const [inputName, setInputName] = useState([]);
  const [inputValue, setInputValue] = useState("");
  let navigate = useNavigate();
  //get All items
  const getAll = () => {
    let items = getStorageValue("All");
    if (items === null) {
      localStorage.setItem("All", JSON.stringify([]));
    } else {
      setAllInventory(items);
    }
  };

  useEffect(() => {
    getAll();
    if (category === null) {
      console.log("no category");
    } else {
      category.map((d)=> setProp(d.field))
    }
  }, []);
  // useEffect(() => {
  //   allInventory.map((d) => {
  //     let field = d.field;
  //     setInputName(Object.keys(field));
  //     setInputValue(Object.values(field))
  //   });
  // }, []);
  // inputName.map((d)=> console.log(d));
  //  inputValue.map((f)=> console.log(f));
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div style={{ marginTop: 20 }}>
            <h5 className="fw-bold" style={{ fontSize: 16 }}>
              Category
            </h5>
            <div className="col-md-12">
              <div
                className="d-flex"
                style={{ flexWrap: "wrap", marginBottom: 10 }}
              >
                {category === null ? (
                  <>
                    <p>No category created yet</p>
                  </>
                ) : (
                  <>
                    {category.map((item) => (
                      <>
                        <button
                          className="btn btn-secondary mx-2"
                          onClick={() =>
                            navigate(`type/${item.objectType}`, {
                              replace: true,
                            })
                          }
                        >
                          {item.objectType}
                        </button>
                      </>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <>
            {allInventory.length === 0 ? (
              <>
                <p className="text-center">
                  No item available!!! enter category to add item
                </p>
              </>
            ) : (
              <>
                {allInventory.map((all) => (
                  <>
                    <div className="col-md-4">
                      <div className="card">
                        <p>{all.objectType}</p>
                        <p>{all.title}</p>
                        <div>
                          <p>properties</p>
                          {prop.map((p, i, e) => (
                            <>
                              {/* <InputField
                              name={p[i][ke]}
                                value={p[i]}
                                type={p.type}
                              /> */}
                              <p></p>
                            </>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </>
            )}
          </>
          {show && (
            <>
              {category === null ? (
                <><p>No thing day here yet</p></>
              ) : (
                <>
                  {category.map((item) => (
                    <>
                      <div className="col-md-4">
                        <Card
                          name={item.objectType}
                          title={item.title}
                          data={item.field}
                        />
                      </div>
                    </>
                  ))}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AllMachine;
