import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [machineTypes, setMachineTypes] = useContext(AppContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand text-dark" href="#0">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active" to="/">
                   All
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="settings">
                   Settings
                </Link>
              </li>
              {/* {machineTypes.map((machinetype) => (
                <Link className="nav-item" to="/">
                    {machinetype.name}
                </Link>
              ))} */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
