import HeaderLogo from "/src/images/HeaderLogo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./style.css";
import { useEffect, useState } from "react";

function Header() {
  const [pageID, setPageID] = useState("Header");
  const navigate = useNavigate();
  /* Navigate to correct page, update state variable for pageID referring to where on the page to scroll to
   */
  const moveToPage = (id: string, path: string) => {
    if (window.location.pathname !== path) {
      navigate(path);
    }
    setPageID(id);
  };

  // Scroll to correct part of page
  useEffect(() => {
    if (pageID !== "") {
      const element: HTMLElement | null = document.getElementById(pageID);
      if (element !== null) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setPageID("");
    }
  }, [pageID]);

  return (
    <h1 id="Header">
      <Navbar expand="lg">
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
              <button
                className="Nav"
                onClick={() => moveToPage("LandingPageAboutUs", "/")}
              >
                About Us
              </button>
              {/* <NavLink to="/team" className="Nav">
                Our Team
              </NavLink> */}
            </Nav>
            <Nav className="Nav">
              <button
                className="Nav"
                onClick={() => moveToPage("Header", "/team")}
              >
                Our Team
              </button>
              {/* <NavLink to="/team" className="Nav">
                Our Team
              </NavLink> */}
            </Nav>
            <Nav className="Nav">
              <button
                className="Nav"
                onClick={() => moveToPage("", "/clients")}
              >
                Clients
              </button>
              {/* <NavLink onClick={() => scrollToHeader("")} className="Nav">
                Clients
              </NavLink> */}
            </Nav>
            <Nav className="Nav">
              <button
                className="Nav"
                onClick={() => moveToPage("LandingPageUpcomingEvents", "/")}
              >
                Upcoming Events
              </button>
              {/* <NavLink to="/upcoming-events" className="Nav">
                Upcoming Events
              </NavLink> */}
            </Nav>
            <Nav className="Nav">
              <button
                className="Nav"
                onClick={() => moveToPage("Header", "/apply")}
              >
                Apply Now
              </button>
              {/* <NavLink to="/apply" className="Nav">
                Apply Now
              </NavLink> */}
            </Nav>
            <Nav className="Nav">
              <button
                className="Nav"
                onClick={() => moveToPage("Header", "/contact")}
              >
                Contact Us
              </button>
              {/* <NavLink to="/contact" className="Nav">
                Contact Us
              </NavLink> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </h1>
  );
}

export default Header;
