import React from "react";
import Menubar from "../common/Menubar";
import Footer from "../common/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Menubar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
