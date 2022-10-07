import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Dropdown = () => {
  const [machineTypes, setMachineTypes] = useContext(AppContext);
  return (
    <>
      <ul
        className="dropdown-menu"
        aria-labelledby="dropdownMenuButton2"
        style={{ padding: "20px 10px 10px 10px", marginTop: 30 }}
      >
        <div
          className="d-flex justify-content-between"
          style={{ flexDirection: "column" }}
        >
          {machineTypes.map((machinetype) => (
            <li>
              <Link className="dropdown-item" to="create-wallet">
                <div className="d-flex">
                  <p className="pt-1 mx-2 normal-font">{machinetype.machinetype}</p>
                </div>
              </Link>
            </li>
          ))}
        </div>
      </ul>
    </>
  );
};

export default Dropdown;
