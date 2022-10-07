import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import Card from "../ui/molecules/Card";

const AllMachine = () => {
  const [machineTypes, setMachineTypes] = useContext(AppContext);
  const [id, setid] = useState(0);

  //post machine type

  const postMachineData = () => {
    let data = [...machineTypes];
    data.push({
      id: 1,
      machinetype: "Crane",
      title: "small but mighty",
      type: "electric",
      brand: "toshiba",
      weight: "20",
      quantity: 40,
      date: "12/05/2017",
    });
    setMachineTypes(data);
  };
  console.log(machineTypes);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="text-end">
              <button onClick={postMachineData}>Add Item </button>
            </div>
          </div>
        </div>
        <div className="row">
          {machineTypes.map((machinetype) => (
            <>
              <div className="col-md-3">
                <Card name={machinetype.machinetype} />
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllMachine;
