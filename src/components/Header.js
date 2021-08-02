// Import resources
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

// Component
function Header() {
  // Return
  return (
    <>
      {/** Navbar */}
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          {/** Brand */}
          <Link to="/" className="navbar-brand">
            React CRUD
          </Link>
          {/** Toogle button */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/** Navbar links - collapsible */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/** Home */}
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-link"
              >
                Home
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

// Export
export default Header;
