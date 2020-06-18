import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import "./navbar.css";

const NavbarMain = () => {
  return (
    <div className="main-navbar sticky-top bg-white">
      <Navbar
        className="align-items-stretch navbar-light flex-md-nowrap p-0"
        bg="light"
        expand="lg"
      >
        <Navbar.Brand href="#home">
          <h3 className="mt-2 ml-4">Welcome</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown
              title="Admin"
              className="px-3 text-nowrap"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">
                Internships
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Webinars</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Add New Internship
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Add New Webinar
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        {/* <a
          href="#"
          class="nav-link nav-link-icon toggle-sidebar d-md-inline d-lg-none text-center border-left"
          data-toggle="collapse"
          data-target=".header-navbar"
          aria-expanded="false"
          aria-controls="header-navbar"
        >
          <p>Toggle</p>
        </a> */}
      </Navbar>
    </div>
  );
};

export default NavbarMain;
