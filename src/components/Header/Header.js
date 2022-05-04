import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import pic1 from "../../images/logo-2.png";
import auth from "../../firebase.init";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div className="sticky-top">
      <Navbar
        collapseOnSelect
        expand="lg"
        className="border-bottom border-secondary border-1"
        bg="white"
        variant="light"
      >
        <Container className=" my-2">
          <Navbar.Brand as={Link} to="/" href="#home">
            Ocean Furniture Depot
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/somethingHome1" href="#somethingHome1">
                SomethingHome1
              </Nav.Link>
              <Nav.Link as={Link} to="/somethingHome2" href="#somethingHome2">
                SomethingHome2
              </Nav.Link>
              <Nav.Link as={Link} to="manageinventory" href="#manageinventory">
                Manage Inventories
              </Nav.Link>
              <Nav.Link as={Link} to="blog" href="#blog">
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="aboutus" href="#about">
                About us
              </Nav.Link>
            </Nav>
            <Nav>
              {user ? (
                <button onClick={handleSignOut} className="btn btn-secondary">
                  {" "}
                  Sign Out
                </button>
              ) : (
                <Nav.Link as={Link} to="signin" href="#signin">
                  Sign In
                </Nav.Link>
              )}

              <Nav.Link eventKey={2} href="#register">
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"> */}
    </div>
  );
};

export default Header;
