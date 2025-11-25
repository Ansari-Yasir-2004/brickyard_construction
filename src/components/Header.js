import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CompanyLogo from "../assets/images/webp/company-logo.webp";
import { navLinks } from "../data";
import { NavLink } from "react-router-dom";
import PrimaryBtn from "./PrimaryBtn";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-white p-3">
      <Container>
        <Navbar.Brand href="/">
          <img src={CompanyLogo} alt="Company logo" className="company-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto gap-2 pt-4 pt-lg-0">
            {navLinks.map((link) => (
              <Nav.Link
                key={link.id}
                as={NavLink}
                to={link.path}
                className="text-capitalize border-top-0 border-start-0 border-end-0 border-silver-chalice border-lg-0 text-eerie-black fw-500 ps-3 px-lg-4 rounded-lg-pill"
                activeClassName="bg-tea-green"
              >
                {link.label}
              </Nav.Link>
            ))}
            <div className="">
              <PrimaryBtn label={"Let's Talk"} />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
