import React from "react";
import Nav from "react-bootstrap/Nav";

const Footer = () => {
  return (
    <footer className="main-footer d-flex p-2 px-3 bg-white border-top">
      <Nav>
        <Nav.Link href="/admin">Dashboard</Nav.Link>
        <Nav.Link href="/admin">Webinars</Nav.Link>
        <Nav.Link href="/admin">Add New Event</Nav.Link>
        <Nav.Link href="/admin">Contact Us</Nav.Link>
      </Nav>
    </footer>
  );
};

export default Footer;
