import React from "react";
import Nav from "react-bootstrap/Nav";
// import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../logo.svg";

import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="main-navbar">
      {/* <Nav
        className="main-sidebar align-items-stretch flex-md-nowrap border-bottom"
        bg="light"
        expand="lg"
      >
        <Nav.link href="/home">Welcome</Nav.link>
      </Nav> */}
      <a className="toggle-sidebar d-sm-inline d-md-none d-lg-none custom-link">
        <p>Toggle</p>
      </a>
      <Nav
        defaultActiveKey="/home"
        className=" flex-md-nowrap border-bottom"
        bg="light"
        expand="lg"
      >
        <Nav.Link className="custom-link">
          <h3>Welcome</h3>
        </Nav.Link>
      </Nav>
      {/* <div className="d-table m-auto">
        <img src={logo} alt="dashboard" />
      </div> */}
      <div className="nav-wrapper">
        <ul className="nav flex-column">
          <li className="nav-item custom-item ">
            <a className="nav-link custom-link" href="/admin/">
              {/* <i className="material-icons">edit</i> */}
              <span>Dashboard</span>
            </a>
          </li>
          <li className="nav-item custom-item ">
            <a className="nav-link custom-link " href="/admin/webinars">
              {/* <i className="material-icons">vertical_split</i> */}
              <span>Webinars</span>
            </a>
          </li>
          <li className="nav-item custom-item">
            <a className="nav-link custom-link " href="/admin/internships">
              {/* <i className="material-icons">vertical_split</i> */}
              <span>Internships</span>
            </a>
          </li>
          <li className="nav-item custom-item">
            <a className="nav-link custom-link" href="/admin/add-webinar">
              {/* <i className="material-icons">note_add</i> */}
              <span>Add New Event</span>
            </a>
          </li>
          <li className="nav-item custom-item">
            <a className="nav-link custom-link" href="/admin/add-internship">
              {/* <i className="material-icons">note_add</i> */}
              <span>Add New Internship</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
