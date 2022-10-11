import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { InputField } from "../ui/atoms/InputField";
import { useNavigate } from "react-router-dom";
import Card from "../ui/molecules/Card";
import { getStorageValue, useLocalStorage } from "../utils/memory";
import { useParams } from "react-router-dom";

const SubMachine = () => {
  let { name } = useParams();
  const [subItem, setSubItem] = useState([]);
  const [show, setShow] = useState(false);
  const [category, setCategory] = useContext(AppContext);
  const [formfield, setFormfield] = useState([]);
  const [allItem, setAllItem] = useLocalStorage([]);
  //get All items
  const getAll = () => {
    const arr = [];
    let items = getStorageValue("All", arr);
    if (items === undefined) {
      arr.push({
        objectType: "",
        title: "",
        field: [],
      });
      setAllItem(arr);
    } else {
      let test = items.filter((item) => {
        return item.objectType === name;
      });
      setSubItem(test);
    }
  };
  useEffect(() => {
    getAll();
    let field = category.filter((f) => f.objectType === name);
    setFormfield(field);
  }, []);
  return (
    <>
      {
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div
                className="d-flex justify-content-between"
                style={{ marginTop: 20 }}
              >
                <p>{name}</p>
                <button
                  onClick={() => setShow(!show)}
                  className="btn btn-success"
                >
                  Add Item{" "}
                </button>
              </div>
              
            </div>
          </div>
          <div className="row">
            <>
              {subItem.length === 0 ? (
                <>
                  <div className="col-md-4">
                    <p>No item available!!!</p>
                  </div>
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
      }
    </>
  );
};

export default SubMachine;
