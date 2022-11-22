import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  const activeStyle = { color: "#black" };
  return (
    <Navbar bg="light" expand="lg">
      <NavLink className="myNavLink" to="/" exact>
        <img
          alt=""
          src="./assets/brujula.jpg"
          width="30"
          height="30"
          className="d-inline-block align-top mr-3"
        />
        Cuatrovientos
      </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink
            className="myNavLink"
            to="/courses"
            activeStyle={activeStyle}
          >
            Formación
          </NavLink>
          <NavLink className="myNavLink" to="/about" activeStyle={activeStyle}>
            Proyecto educativo
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
