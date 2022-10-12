import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import Card from "../ui/molecules/Card";
import { getStorageValue } from "../utils/memory";

const AllMachine = () => {
  const [category, setCategory] = useContext(AppContext);
  const [show, setShow] = useState(false);
  const [allInventory, setAllInventory] = useState([]);
  const [prop, setProp] = useState([]);

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
      category.map((d) => setProp(d.field));
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
                      <div className="card" style={{ padding: 30, margin: 5 }}>
                        <div>
                          <h6 className="fw-bold">{all.objectType}</h6>
                          <p className="text-secondary">Title: {all.title}</p>
                        </div>
                        <hr />
                        <div>
                          <h6 className="fw-bold">Properties</h6>
                          <p className="text-danger text-center">need help here!!!</p>
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
                <>
                  <p>No thing day here yet</p>
                </>
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
