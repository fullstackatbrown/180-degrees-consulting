import HeaderLogo from "/src/images/HeaderLogo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import "./style.css";

function Header() {
  return (
    <h1>
      <Navbar
        expand="lg"
        style={
          {
            // background: "#3C64B1",
            // opacity: 0.06,
          }
        }
      >
        <Container className="LogoHeader">
          <Navbar.Brand className="Logo">
            <NavLink to="/">
              <img
                className="Logo"
                src={HeaderLogo}
                alt="180 Degrees Consulting: Brown"
              ></img>
            </NavLink>
          </Navbar.Brand>
          <Navbar.Collapse id="navbar-nav">
            <Nav className="Nav">
              <NavLink to="/about" className="Nav">
                About Us
              </NavLink>
            </Nav>
            <Nav className="Nav">
              <NavLink to="/team" className="Nav">
                Our Team
              </NavLink>
            </Nav>
            <Nav className="Nav">
              <NavLink to="/clients" className="Nav">
                Clients
              </NavLink>
            </Nav>
            <Nav className="Nav">
              <NavLink to="/faq" className="Nav">
                FAQ
              </NavLink>
            </Nav>
            <Nav className="Nav">
              <NavLink to="/contact" className="Nav">
                Contact Us
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </h1>
  );
}

export default Header;
