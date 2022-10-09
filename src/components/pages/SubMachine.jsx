import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { InputField } from "../ui/atoms/InputField";
import { useNavigate } from "react-router-dom";
import Card from "../ui/molecules/Card";
import { getStorageValue } from "../utils/memory";
import { useParams } from "react-router-dom";

const SubMachine = () => {
  let { name } = useParams();
  const [subItem, setSubItem] = useState([]);
  const [show, setShow] = useState(false);
  const [category, setCategory] = useContext(AppContext);
  const [formfield, setFormfield] = useState([]);
  //get All items
  const getAll = () => {
    const items = getStorageValue("All");
    console.log(items);
    let test = items.filter((item) => {return item.objectType === name});
    console.log(test);
    setSubItem(test);
  };
  useEffect(() => {
    getAll();
    let field = category.filter((f) => f.objectType === name);
    console.log(field);
    setFormfield(field);
  }, []);
  return (
    <>
      {
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="d-flex justify-content-between" style={{ marginTop: 20 }}>
                <p>{name}</p>
                <button
                  onClick={() => setShow(!show)}
                  className="btn btn-success"
                >
                  Add Item{" "}
                </button>
              </div>
              {show && (
                <>
                  {formfield.map((item) => (
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
            </div>
          </div>
          <div className="row">
            <>
              {subItem.length === 0 ? (
                <>
                  <p>No item available!!!</p>
                </>
              ) : (
                <>
                  {subItem.map((all) => (
                    <>
                      <div className="col-md-4">
                        <div className="card">
                          <p>{all.objectType}</p>
                          <p>{all.title}</p>
                          <div>
                            <p>properties</p>
                            {/* {prop.map((p) => (
                              <>
                                <p>{p}</p>
                              </>
                            ))} */}
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </>
              )}
            </>
          </div>
        </div>
      }
    </>
  );
};

export default SubMachine;
