import React from "react";
import NavBar from "../Navbar/Navbar";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default Layout;
