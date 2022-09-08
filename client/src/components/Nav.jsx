import { Navbar, Container, Offcanvas } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../App.css";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { HiCubeTransparent } from "react-icons/hi";
import { FcSalesPerformance } from "react-icons/fc";

import logo from "../assets/—Pngtree—house property logo with hand_7271247.png";

const Nav = () => {
  return (
    <Navbar bg="dark" variant="dark" expand={false} className="sticky-top">
      <Container>
        <Navbar.Brand className="d-flex align-items-center">
          <Link to="/" className="link d-flex align-items-center text-white">
            <img src={logo} className="logo-img me-2" />
            <h3 className="logo">Rent</h3>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title
              id="offcanvasNavbarLabel"
              className="d-flex align-items-center"
            >
              <img src={logo} className="logo-img me-2" />
              <h3 className="logo">Rent</h3>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body
            bg="dark"
            variant="dark"
            className="d-flex flex-column  flex-grow-1 pe-3"
          >
            <Link to="/" className="link p-2">
              <SiHomeassistantcommunitystore className="icon" /> Home
            </Link>
            <Link to="/property-sale" className="link p-2">
              <FcSalesPerformance className="icon" /> Property For Sale
            </Link>
            <Link to="/property-rent" className="link p-2">
              <HiCubeTransparent className="icon" /> Property For Rent
            </Link>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Nav;
