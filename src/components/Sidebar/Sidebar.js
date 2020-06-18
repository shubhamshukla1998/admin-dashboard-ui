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
      <a class="toggle-sidebar d-sm-inline d-md-none d-lg-none">
        <p>Toggle</p>
      </a>
      <Nav
        defaultActiveKey="/home"
        className=" flex-md-nowrap border-bottom"
        bg="light"
        expand="lg"
      >
        <Nav.Link>
          <h3>Welcome</h3>
        </Nav.Link>
      </Nav>
      {/* <div className="d-table m-auto">
        <img src={logo} alt="dashboard" />
      </div> */}
      <div class="nav-wrapper">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link" href="/admin/">
              {/* <i class="material-icons">edit</i> */}
              <span>Dashboard</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="/admin/webinars">
              {/* <i class="material-icons">vertical_split</i> */}
              <span>Webinars</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="/admin/internships">
              {/* <i class="material-icons">vertical_split</i> */}
              <span>Internships</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="/admin/add-webinar">
              {/* <i class="material-icons">note_add</i> */}
              <span>Add New Event</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="/admin/add-internship">
              {/* <i class="material-icons">note_add</i> */}
              <span>Add New Internship</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
