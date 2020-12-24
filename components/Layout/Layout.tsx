import React from "react";
import NavBar from "../Navbar/Navbar";
// import styles from "./layout.module.css";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}

      {/*<style jsx>{`*/}
      {/*  div {*/}
      {/*    background: salmon;*/}
      {/*  }*/}
      {/*`}</style>*/}
    </div>
  );
};

export default Layout;
