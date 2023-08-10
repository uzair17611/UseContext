import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";
const AppNavbar = () => {
  return (
    <>
      <Navbar bg="light" variant="light" sticky="top">
        <Container>
          <Navbar.Brand
            bg="light"
            variant="dark"
            style={{ marginRight: "20rem",fontWeight:"bolder" }}
          >
            logo
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className='nav-link' to="/home">
              Home
            </NavLink >
            <NavLink className='nav-link' to="/Store">
              Store
            </NavLink >
            <NavLink className='nav-link' to="/Contact">
              Contact
            </NavLink >
            <NavLink className='nav-link' to="/Cart">
              Cart
            </NavLink >
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavbar;
