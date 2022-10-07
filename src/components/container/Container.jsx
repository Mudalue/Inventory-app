import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../ui/organisms/Navbar";

const Container = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Container;
