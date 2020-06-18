import React from "react";
import Navbar from "../Navbar/NavbarMain";
import Sidebar from "../Sidebar/Sidebar";
import Dashboard from "../Dashboard/dashboard";
import Container from "react-bootstrap/Container";
import "./layout.css";
import Footer from "../Footer/footer";

const Layout = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="main-sidebar col-12 col-md-3 col-lg-2 px-0">
          <Sidebar />
        </div>
        <main className="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3">
          <Navbar />
          <Dashboard />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Layout;
