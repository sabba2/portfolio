import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import githubIcon from "../assets/img/github.svg";
import linkedinIcon from "../assets/img/linkedin.svg";

export const NavBar = () => {
  return (
    <Navbar bg="dark" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          My Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/resume">
              Resume
            </Nav.Link>
            <Nav.Link as={Link} to="/travel">
              Travel
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://github.com/sabba2">
                <img
                  src={githubIcon}
                  id="github-logo"
                  className="navbar-logo"
                  alt="Github icon link"
                />
              </a>
              <a href="https://www.linkedin.com/in/shayan-abbassi/">
                <img src={linkedinIcon} className="navbar-logo" alt="" />
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
