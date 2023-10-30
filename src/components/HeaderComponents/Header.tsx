import HeaderLogo from "/src/images/HeaderLogo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
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
            {/* <img
              className="Logo"
              src={HeaderLogo}
              alt="180 Degrees Consulting Brown"
            ></img> */}
            <img
              className="Logo"
              src={HeaderLogo}
              alt="180 Degrees Consulting Brown"
            ></img>
          </Navbar.Brand>
          <Navbar.Collapse id="navbar-nav">
            <Nav className="Nav">
              <Nav.Link>About Us</Nav.Link>
            </Nav>
            <Nav className="Nav">
              <Nav.Link>Our Team</Nav.Link>
            </Nav>
            <Nav className="Nav">
              <Nav.Link>Clients</Nav.Link>
            </Nav>
            <Nav className="Nav">
              <Nav.Link>FAQ</Nav.Link>
            </Nav>
            <Nav className="Nav">
              <Nav.Link>Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        {/* <Container className="LogoHeader">
          <Navbar.Brand className="Logo">
            <Link to="/">
              <img
                className="Logo"
                src={HeaderLogo}
                alt="180 Degrees Consulting Brown"
              ></img>
            </Link>
          </Navbar.Brand>
          <Navbar.Collapse id="navbar-nav">
            <Nav className="Nav">
              <Nav.Link>
                <Link to="/AboutUs">About Us</Link>
              </Nav.Link>
            </Nav>
            <Nav className="Nav">
              <Nav.Link>
                <Link to="/OurTeam">Our Team</Link>
              </Nav.Link>
            </Nav>
            <Nav className="Nav">
              <Nav.Link>
                <Link to="/ClientServices">Clients</Link>
              </Nav.Link>
            </Nav>
            <Nav className="Nav">
              <Nav.Link>
                <Link to="/FAQPage">FAQ</Link>
              </Nav.Link>
            </Nav>
            <Nav className="Nav">
              <Nav.Link>
                <Link to="/ContactUs">Contact Us</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container> */}
      </Navbar>
    </h1>
  );
}

export default Header;
