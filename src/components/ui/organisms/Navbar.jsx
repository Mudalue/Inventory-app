import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand text-warning fw-bold" href="#0">
            Inventory
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
                <Link class="nav-link active fw-bold text-secondary" to="/">
                   All
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link  fw-bold text-secondary" to="settings">
                   Settings
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
