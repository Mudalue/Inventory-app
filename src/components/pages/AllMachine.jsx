import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { InputField } from "../ui/atoms/InputField";
import { useNavigate } from "react-router-dom";
import Card from "../ui/molecules/Card";
import { getStorageValue } from "../utils/memory";

const AllMachine = () => {
  const [category, setCategory] = useContext(AppContext);
  const [show, setShow] = useState(false);
  const [allItem, setAllItem] = useState([]);
  const [prop, setProp] = useState({});
  let navigate = useNavigate();
  //get All items
  const getAll = () => {
    const items = getStorageValue("All");
    console.log(items);
    let test = items.map((d) => console.log(d.field));
    // console.log(test);
    setAllItem(items);
  };

  useEffect(() => {
    getAll();
    // category.map((d) => setfields(d.field));
  }, []);
  console.log(prop);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div style={{ marginTop: 20 }}>
            <h5 className="fw-bold" style={{ fontSize: 16 }}>
              Category
            </h5>
            <div className="col-md-12">
            <div className="d-flex" style={{flexWrap: "wrap", marginBottom: 10}}>
              {category.map((item) => (
                <>
                  
                    
                      <button
                        className="btn btn-secondary mx-2"
                        onClick={() =>
                          navigate(`type/${item.objectType}`, { replace: true })
                        }
                      >
                        {item.objectType}
                      </button>
                    
  
                </>
              ))}
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <>
            {allItem.length === 0 ? (
              <>
                <p>No item available!!!</p>
              </>
            ) : (
              <>
                {allItem.map((all) => (
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
        </div>
      </div>
    </>
  );
};

export default AllMachine;
